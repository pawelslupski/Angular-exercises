import {LOCALE_ID, NgModule} from '@angular/core';
import localePL from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { HousesDashboardComponent } from './components/houses-dashboard/houses-dashboard.component';
import { HighlightStatusDirective } from './shared/highlight-status.directive';
import {StatusTranslatePipe} from "./shared/polish-translate.pipe";

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    HouseCardComponent,
    HousesDashboardComponent,
    HighlightStatusDirective,
    StatusTranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
