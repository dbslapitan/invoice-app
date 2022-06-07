import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeFilterComponent } from './partials/home-filter/home-filter.component';
import { ToggleUnlessDirective } from './shared/directives/toggle-unless.directive';
import { InvoiceComponent } from './partials/invoice/invoice.component';
import { NoInvoiceComponent } from './partials/no-invoice/no-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeFilterComponent,
    ToggleUnlessDirective,
    InvoiceComponent,
    NoInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
