import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from './events/models/customer';
import { CustomerService } from './events/services/customerservice';
import { Table } from 'primeng/table';
import { CalendarDefinitions, SelectionMode } from './core/components/dp-calendar/objects/calendar-definitions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent {
    calendarDefinitions: CalendarDefinitions;
    calendar2Definitions: CalendarDefinitions;
    calendar3Definitions: CalendarDefinitions;

    calendarData1: Date;
    calendarData2: Date;
    calendarData3: Date;
    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit(): void {
        this.calendarDefinitions = new CalendarDefinitions({
            minDate: new Date(2019, 6, 12), showTime: false
        });
        this.calendar2Definitions = new CalendarDefinitions({
            showTime: true
        });
        this.calendar3Definitions = new CalendarDefinitions({
            selectionMode: SelectionMode.range
        });

        // this.calendarData1 = new Date();
        this.calendarData2 = new Date();
        this.calendarData3 = new Date();
    }

}


