import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomerService } from './events/services/customerservice';
import { EventsModule } from './events/events.module';
import { GridComponent } from './core/components/grid/grid.component';
import { CoreModule } from './core/modules/prime.module';
import { GridtestComponent } from './core/test/gridtest/gridtest.component';
import { CellComponent } from './core/components/grid/cell/cell.component';
import { DpCheckboxComponent } from './core/components/dp-checkbox/dp-checkbox.component';
import { DpInputnumberComponent } from './core/components/dp-inputnumber/dp-inputnumber.component';
import { GridtesteditableComponent } from './core/test/gridtesteditable/gridtesteditable.component';
import { DpInputtextComponent } from './core/components/dp-inputtext/dp-inputtext.component';
import { CountryService } from './events/services/countryservice';
import { DpAutocompleteComponent } from './core/components/dp-autocomplete/dp-autocomplete.component';
import { AutocompletetestComponent } from './core/test/autocompletetest/autocompletetest.component';
import { ToastComponent } from './core/components/toast/toast.component';
import { ToasttestComponent } from './core/test/toasttest/toasttest.component';
import { AutocompletesingletestComponent } from './core/test/autocompletesingletest/autocompletesingletest.component';
import { DpCalendarComponent } from './core/components/dp-calendar/dp-calendar.component';
import { DpButtonComponent } from './core/components/dp-button/dp-button.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EventsModule,
    CoreModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent, GridComponent, GridtestComponent, CellComponent, DpCheckboxComponent,
    DpInputnumberComponent, GridtesteditableComponent, DpInputtextComponent, DpAutocompleteComponent,
    AutocompletetestComponent, ToastComponent, ToasttestComponent, DpCalendarComponent, DpButtonComponent],
  bootstrap: [AppComponent],
  providers: [CustomerService, CountryService, DatePipe],
})

export class AppModule { }
