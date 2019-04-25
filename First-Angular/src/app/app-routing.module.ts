import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Product/products/products.component';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TemplateComponent } from './auth/login/template/template.component';
import { ReactiveComponent } from './auth/login/reactive/reactive.component'

const routes: Routes = [
  { path:"products", component:ProductsComponent , canActivate:[AuthGuard]},
  { path:"login", component:  LoginComponent },
  { path:"reactive", component:ReactiveComponent,canActivate:[AuthGuard] },
  { path:"template", component:TemplateComponent,canActivate:[AuthGuard] },
  { path:"products/:pId", component:ProductDetailComponent,canActivate:[AuthGuard] },
  { path:"welcome", component:WelcomeComponent ,canActivate:[AuthGuard]},
  { path:"", redirectTo:"welcome", pathMatch:"full"},
  { path:"**", redirectTo:"welcome" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
