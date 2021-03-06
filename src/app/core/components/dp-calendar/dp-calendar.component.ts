import { Component, OnInit, Input } from '@angular/core';
import { CalendarDefinitions, SelectionMode } from './objects/calendar-definitions';
import { NgModel } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dp-calendar',
  templateUrl: './dp-calendar.component.html',
  styleUrls: ['./dp-calendar.component.css']
})
export class DpCalendarComponent implements OnInit {

  lastInputDate: Date;
  isInputByUser: boolean;
  @Input() definition: CalendarDefinitions;
@Input() ngModelDP: any;
  @Input() rowData: any;
  @Input() columnDefinition: any;
  constructor() { }

  ngOnInit(): void {
    if (this.definition == null) {
      this.rowData[this.columnDefinition.fieldname] = new Date(this.rowData[this.columnDefinition.fieldname]);
      this.definition = new CalendarDefinitions({});
      if (this.columnDefinition.columnParams.length > 0) {
        let i = 0;
        while (i < this.columnDefinition.columnParams.length) {
          if (this.columnDefinition.columnParams[i].key === 'showTime') {
            this.definition.showTime = this.columnDefinition.columnParams[i].value;
          }

          if (this.columnDefinition.columnParams[i].key === 'minDate') {
            this.definition.minDate = this.columnDefinition.columnParams[i].value;
          }

          if (this.columnDefinition.columnParams[i].key === 'maxDate') {
            this.definition.maxDate = this.columnDefinition.columnParams[i].value;
          }

          if (this.columnDefinition.columnParams[i].key === 'selectionMode') {
            this.definition.selectionMode = this.columnDefinition.columnParams[i].value;
          }
          i++;
        }
      }
    }
  }

  onSelectedDate(selectedDate: Date) {
    // this.lastInputDate = selectedDate;
    this.isInputByUser = false;
  }

  onInputDate(event: Event) {
    this.isInputByUser = true;
  }

  onInputBlur(event: Event) {

    if (this.isInputByUser) {
      this.isInputByUser = false;
    } else {
      return;
    }

    if (this.definition.selectionMode === SelectionMode.range) {
      return;
    }

    let hour: string;
    let minute: string;
    let input = (<HTMLInputElement>event.target).value;

    if (input === '') {
      return;
    }

    if (this.definition.showTime) {
      const time = input.split(' ')[1];
      if (time !== undefined) {
        hour = time.split(':')[0];
        minute = time.split(':')[1];
        if (!this.validateTime(hour, minute)) {
          return;
        }
      }
    }

    input = input.split(' ')[0];
    input = this.setCorrectFormat(input, '/');
    input = this.setCorrectFormat(input, '.');

    if (isNaN(+input)) {
      return;
    }

    let date = new Date();

    if (input.length === 6 || input.length === 8) {
      date = this.getValidDateMonth(input.substr(0, 2), input.substr(2, 2), input.substr(4, 4), 2500, 1900);
    } else {
      // user wrote a number and expects to get the date. e.g. he wrote -30 and expects to get the date from a month ago.
      date.setDate(date.getDate() + +input);
    }

    if (this.definition.showTime && minute !== undefined) {
      date.setHours(+hour, +minute);
    }

    // if (this.lastInputDate !== undefined && this.lastInputDate.getDate() === date.getDate()) {
    //   return;
    // }

    // this.lastInputDate = date;
    this.ngModelDP = date;
  }

  validateTime(aHouers, aMinute) {
    if (aHouers.trim() === '' || isNaN(aHouers)) { return false; }
    if (aMinute.trim() === '' || isNaN(aMinute)) { return false; }
    if (+aHouers < 0 || +aHouers > 23) { return false; }
    if (+aMinute < 0 || +aMinute > 59) { return false; }

    return true;
  }

  // change 12/5/20 to 120520
  // change 12.5.20 to 120520
  setCorrectFormat(insertedFormat, delimiter) {
    let retVal = '';
    const temp = insertedFormat.toString().split(delimiter);
    if (temp.length !== 3) {
      retVal = insertedFormat;
      return retVal;
    }

    temp.forEach(function (ele) {
      if (ele.length === 1) {
        ele = '0' + ele;
      }
      retVal = retVal + ele;
    });

    return retVal;
  }

  // gets value formatted in 6 or 8 chars e.g. 120520 / 12052020 and changes to date object.
  getValidDateMonth(a_day, a_month, a_year, a_TopYear, a_LowYear) {

    let iDay, iMonth, iYear;

    if (+a_day < 1 || +a_day > 31) { return null; }
    if (+a_month < 1 || +a_month > 12) { return null; }

    if (a_day.length > 2 || a_month.length > 2 || a_year.length < 1 || a_year.length > 4) { return null; }

    if (parseInt(a_day, 10) <= 0 || parseInt(a_day, 10) > 31) {
      return null;
    }

    iMonth = parseInt(a_month, 10);
    iDay = parseInt(a_day, 10);
    iYear = parseInt(a_year, 10);

    if (iDay.toString().length === 1) {
      iDay = '0' + iDay;
    }
    if (iMonth.toString().length === 1) {
      iMonth = '0' + iMonth;
    }
    if (iYear.toString().length === 1) {
      iYear = '0' + iYear;
    }

    if (iYear.toString().length === 2) {
      if (parseInt(iYear, 10) > 30) {
        iYear = 1900 + parseInt(iYear, 10);
      } else {
        iYear = 2000 + parseInt(iYear, 10);
      }
    }

    if (iYear > a_TopYear || iYear < a_LowYear) { return null; }
    switch (iMonth) {
      case 4 || 6 || 9 || 11:
        if (iDay > 30) { return null; }
        break;
      case 2:
        if (iMonth % 4 === 0) {
          if (iDay > 29) { return null; } else if (iDay > 28) { return null; }
        }
        break;
    }
    try {
      return new Date(iYear, iMonth - 1, iDay);
    } catch (e) { return null; }
  }
}
