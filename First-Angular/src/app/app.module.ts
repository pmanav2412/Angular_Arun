import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
;

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
