import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Product/products/products.component';
import { ProductsPipe } from './Product/products.pipe';
import { RatingsComponent } from './Product/ratings/ratings.component';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import { NavbarComponent } from './misc/navbar/navbar.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { PanelComponent } from './auth/panel/panel.component';
import { TemplateComponent } from './auth/login/template/template.component';
import { ReactiveComponent } from './auth/login/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingsComponent,
    WelcomeComponent,
    NavbarComponent,
    ProductDetailComponent,
    LoginComponent,
    PanelComponent,
    TemplateComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
