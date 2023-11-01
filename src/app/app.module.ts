import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; // If you are using template-driven forms
// or
import { Pipe, PipeTransform } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms'; // If you are using reactive forms
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { DasbarhComponent } from './components/Quantri/dasbarh/dasbarh.component';
import { CustomerComponent } from './components/Quantri/customer/customer.component';
import { ProductsComponent } from './components/Quantri/products/products.component';
import { ChartComponent } from './components/Quantri/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DasbarhComponent,
    CustomerComponent,
    ProductsComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,ButtonModule,FormsModule,ReactiveFormsModule,DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
