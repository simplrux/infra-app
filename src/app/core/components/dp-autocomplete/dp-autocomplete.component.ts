import { Component, OnInit, Input, ViewEncapsulation, ɵConsole, forwardRef, AfterViewInit } from '@angular/core';
import { AutocompleteDefinitions } from './Objects/autocomplete-definitions';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dp-autocomplete',
  templateUrl: './dp-autocomplete.component.html',
  styleUrls: ['./dp-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => DpAutocompleteComponent),
  //     multi: true
  //   }
  // ]
})
export class DpAutocompleteComponent implements OnInit {

  @Input()
  rowData: any;

  @Input()
  colDef: any = [];

  suggType: string;

  // pass any suggestions youd like
  suggestions: string[] = ['Audi', 'BMW',
    'Fiat', 'Ford', 'Honda',
    'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

  filteredSuggestions: any[];

  ngModel: any;

  ngOnInit() {
    this.suggType = this.colDef.suggType;
    if (this.rowData && this.colDef) {
      this.ngModel = this.rowData[this.colDef['fieldname']];
    }
    if(this.colDef.suggType){
      
    }
  }

  filterBrands(event) {
    this.filteredSuggestions = [];
    for (let i = 0; i < this.suggestions.length; i++) {
      const suggestion = this.suggestions[i];
      if (suggestion.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredSuggestions.push(suggestion);
      }
    }
  }






  // val = ''; /* for ControlValueAccessor*/

  // @Input()
  // definition: AutocompleteDefinitions;

  // @Input()
  // datasource: any = [];

  //  /*for grid start*/
  //  /* @Input() rowData: any = [];
  //  @Input() columndefinition: any = []; */
  //  /*for grid end*/


  // // @Output() autocompleteSelectChanged: EventEmitter<string[]> = new EventEmitter();

  // filteredData: any = [];

  // isInited = false;

  // datasource_val: string;

  // ArrTable_Keys: string[] = []; /* holds the table json keys */
  // ArrTable_fieldsToSearch: number[] = []; /* list of columns(index) to filter by */
  // ArrTable_ColumnsStyle: string[] = [];  /* list of table columns(index) style */

  // entitySelected: any;


  // ngOnInit() {
  //   // console.log(this.datasource);
  // }

  // constructor() { }

  // // constructor(private countryService: CountryService) { }

  // // clearItem(autocomplete: any) {
  // //   autocomplete.value = '';
  // //   autocomplete.handleDropdownClick();
  // // }



  // filterEntity(event, Loc_dp_AutocompleteType: number, Loc_dp_AutocompleteMaxSuggestionsToShow: number): any[] {
  //   // console.log('1) in  filterEntity Loc_dp_AutocompleteType=' + Loc_dp_AutocompleteType + ' suggestions=');
  //   // console.log(this.filteredData);

  //   this.InitDatasourceKeys(Loc_dp_AutocompleteType);

  //   this.filteredData = [];

  //   const filtered: any[] = [];
  //   if (Loc_dp_AutocompleteType === 1) { /* Table */
  //     this.filteredData = this.filterEntityWithTable(event, Loc_dp_AutocompleteMaxSuggestionsToShow);
  //     return this.filteredData;
  //   } else if (Loc_dp_AutocompleteType === 2) { /* WithImage */
  //     this.filteredData = this.filterEntityWithImage(event, Loc_dp_AutocompleteMaxSuggestionsToShow);
  //     return this.filteredData;
  //   }

  //   for (let i = 0; i < this.datasource.length && filtered.length <
  //     Loc_dp_AutocompleteMaxSuggestionsToShow; i++) { /* dont want to load more than this number of suggestions*/
  //     const foundedEntity = this.datasource[i];
  //     // this.entitySelected = foundedEntity;
  //     if (foundedEntity.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
  //       filtered.push(foundedEntity);
  //     }
  //   }
  //   this.filteredData = filtered;
  //   return filtered;
  // }

  // filterEntityWithImage(event, Loc_dp_AutocompleteMaxSuggestionsToShow: number): any[] {
  //   const filtered: any[] = [];
  //   this.filteredData = [];

  //   for (let i = 0; i < this.datasource.length && filtered.length <
  //     Loc_dp_AutocompleteMaxSuggestionsToShow; i++) { /* dont want to load more than this number of suggestions*/
  //     const foundedEntity = this.datasource[i];
  //     // this.entitySelected = foundedEntity;
  //     this.val = foundedEntity;
  //     if (foundedEntity.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
  //       filtered.push(foundedEntity);
  //     }
  //   }


  //   this.filteredData = filtered;
  //   return filtered;
  // }

  // filterEntityWithTable(event, Loc_dp_AutocompleteMaxSuggestionsToShow: number): any[] {

  //   const Loc_dp_AutocompleteFieldsToFIlter = '';

  //   const filtered: any[] = [];
  //   this.filteredData = [];

  //   for (let i = 0, isFound = false; i < this.datasource.length && filtered.length <
  //     Loc_dp_AutocompleteMaxSuggestionsToShow; i++) { /* dont want to load more than 200 suggestions*/
  //     const foundedEntity = this.datasource[i];
  //     // const foundedEntity = this.datasource["Active"];
  //     isFound = false;
  //     for (let j = 0; j < this.ArrTable_Keys.length && !isFound && this.ArrTable_fieldsToSearch.includes(j); j++) {
  //       /* move on all row fileds. stop looping if found match in one column. loop only on ArrTable_fieldsToSearch */
  //       if (i === 0) {
  //         filtered.push(foundedEntity); /* re insert header row */
  //         isFound = true;
  //         continue;
  //       }
  //       if (foundedEntity[this.ArrTable_Keys[j]].toLowerCase().indexOf(event.query.toLowerCase()) === 0) { // if start with
  //         filtered.push(foundedEntity);
  //         isFound = true;
  //         continue;
  //       }
  //     }
  //   }
  //   this.filteredData = filtered;
  //   return filtered;
  // }

  // getStyle(id) {
  //   // console.log(id);
  //   // return {color: 'yellow'};
  // }

  // InitDatasourceKeys(tmp_dp_AutocompleteType: number) {
  //   /* for the first time put the datasource keys in arr */

  //   console.log('in InitDatasourceKeys, isInited =  ' + this.isInited);

  //   if (this.isInited === true || tmp_dp_AutocompleteType !== 1) {
  //     return;
  //   }

  //   /* create an array of keys by the first element*/
  //   if (this.ArrTable_Keys.length === 0) {
  //     const jsonData = this.datasource[0];
  //     // tslint:disable-next-line: forin
  //     for (const myIndex in jsonData) {
  //       const key = myIndex;
  //       this.ArrTable_Keys.push(key);
  //     }
  //   }


  //   let strHeaderItem = '';
  //   let strPsik = '';

  //   if (this.definition.dp_AutocompleteTableFields !== undefined) {
  //     const ColumnsExtradata = this.definition.dp_AutocompleteTableFields;

  //     // json loop, create arrays for ColumnsStyle, fieldsToSearch
  //     for (const key in ColumnsExtradata) {
  //       if (ColumnsExtradata.hasOwnProperty(key)) {
  //         this.ArrTable_ColumnsStyle.push(ColumnsExtradata[key].columnStyle);
  //         if (ColumnsExtradata[key].ToSearch === true) {
  //           this.ArrTable_fieldsToSearch.push(parseInt(key));
  //         }
  //       }
  //     }

  //     console.log('this.ArrTable_fieldsToSearch ->');
  //     console.log(this.ArrTable_fieldsToSearch);


  //     // const p_autocomplete_ID = '' ;
  //     // let tableFieldsCSS = ' p-autocomplete#' + p_autocomplete_ID + ' .clsWithTable ul { ';
  //     //   tableFieldsCSS = tableFieldsCSS + ' li :nth-child(1) {width:100px;background-color:yellow;} ';
  //     //   tableFieldsCSS = tableFieldsCSS + ' } ';


  //   } else { /* else -  put all indexes in ArrTable_fieldsToSearch arr */
  //       for (let ind = 0; ind < this.ArrTable_Keys.length; ind++) {
  //         this.ArrTable_fieldsToSearch.push(ind);
  //       }
  //   }

  //   if (this.ArrTable_Keys.length) {
  //     this.ArrTable_Keys.forEach((item, index) => {
  //       // console.log(item);
  //       if (index > 0) {
  //         strPsik = ',';
  //       }
  //       // this.ArrTable_fieldsToSearch.push(index);
  //       strHeaderItem = strHeaderItem + strPsik + ' "' + this.ArrTable_Keys[index] + '" :  "' + this.ArrTable_Keys[index] + '" ';
  //     });
  //     // for (let ind = 0; ind < this.ArrTable_Keys.length; ind++) {
  //     // }
  //   }


  //   // this.ArrTable_fieldsToSearch = [0, 1, 2, 3] ;

  //   // const newItem = {
  //   //   'Module Type': 'Module Type', 'Event Code': 'Event Code', 'Eng Desc': 'Eng Desc',
  //   //   'Heb Desc': 'Heb Desc', 'Active': 'Active'
  //   // };

  //   const newItem = JSON.parse('{ ' + strHeaderItem + ' }');
  //   this.datasource.unshift(newItem); /* add as first datasource item */

  //   console.log('5) add newItem');

  //   this.isInited = true;

  //   // const jsonStr = this.datasource;
  //   // let obj = JSON.parse(jsonStr);
  //   // obj['data'].push( {'Module Type': 'Module Type', 'Event Code': 'Event Code', 'Eng Desc': 'Eng Desc',
  //   // 'Heb Desc': 'Heb Desc', 'Active': 'Active'});
  //   // this.datasource = JSON.stringify(obj);

  //   // let jsonStr = JSON.stringify(this.datasource);

  //   // jsonStr = ' {"Module Type": "Module Type", "Event Code": "Event Code", "Eng Desc": "Eng Desc", "Heb Desc": "Heb Desc",
  //   // "Active": "Active"},'
  //   //  + jsonStr;

  //   //  this.datasource = JSON.parse(jsonStr);


  //   // const jsonStr = JSON.stringify(this.datasource);
  //   // console.log('jsonStr=');
  //   // console.log(jsonStr);

  //   // const a = JSON.parse(jsonStr);
  //   // console.log('a =');
  //   // console.log(a );
  // }



  // // onAutocompleteSelect(event, Loc_dp_AutocompleteType: number) {

  // //   console.log(Loc_dp_AutocompleteType);

  // //   console.log('gil before emit:');
  // //   console.log(event);

  // //   if (Loc_dp_AutocompleteType === 1) {
  // //     // this.entitySelected = this.funcConvertJsonValuesToStringArr(event);
  // //     this.autocompleteSelectChanged.emit(this.funcConvertJsonValuesToStringArr(event));
  // //   } else {
  // //     this.entitySelected = event;
  // //     this.autocompleteSelectChanged.emit(event);
  // //   }
  // // }

  // onPreventSelectFirstOption(event, Loc_dp_AutocompleteType: number) {

  //   // if (Loc_dp_AutocompleteType !== 1) {
  //   //   return; /* return if not autocomplete with table inside*/
  //   // }
  //   // console.log('onMyFunc2 !!!!!!');
  //   // event.preventDefault();
  //   // event.stopPropagation();
  // }

  // funcConvertJsonValuesToStringArr(jsonElem: any) {
  //   const selected_result = [];

  //   // for (const val in jsonElem) {
  //   //   if (jsonElem.hasOwnProperty(val)) {
  //   //     selected_result.push(jsonElem[val]);
  //   //   }
  //   // }
  //   let key;
  //   for (key in jsonElem) {
  //     if (jsonElem.hasOwnProperty(key)) {
  //       selected_result.push(jsonElem[key]);
  //     }
  //   }

  //   return selected_result;
  // }


  // /* ControlValueAccessor functions - start */
  // onChange: any = () => { };
  // onTouch: any = () => { };


  // set value(val) {
  //   if (val !== undefined && this.val !== val) {
  //     this.val = val;
  //     this.onChange(val);
  //     this.onTouch(val);
  //   }

  // }

  // writeValue(value: any) {
  //   this.value = value;
  // }

  // registerOnChange(fn: any) {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: any) {
  //   this.onTouch = fn;
  // }
  // /* ControlValueAccessor functions - end */
}
