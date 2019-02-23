import { CompVisibService } from './comp-visib.service';
import { SupplementService } from './supplement.service';
import { BmiService } from './bmi.service';
import { EmiService } from './emi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { BmiCalcComponent } from './bmi-calc/bmi-calc.component';
import { CurrencyCalcComponent } from './currency-calc/currency-calc.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalcService } from './calc.service';
import { SupplementComponent } from './supplement/supplement.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalcComponent,
    EmiCalcComponent,
    BmiCalcComponent,
    CurrencyCalcComponent,
    ToDoListComponent,
    SupplementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ CalcService , EmiService, BmiService, SupplementService , CompVisibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
