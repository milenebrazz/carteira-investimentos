import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultComponent } from './components/result/result.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { FooterComponent } from './components/footer/footer.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent,
    ChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    //FontAwesomeModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: LOCALE_ID, useValue: 'pt-PT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
