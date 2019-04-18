import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Product/products/products.component';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path:"products", component:ProductsComponent , canActivate:[AuthGuard]},
  { path:"login", component:  LoginComponent },
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
