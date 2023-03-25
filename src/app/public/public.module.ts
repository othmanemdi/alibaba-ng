import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './body/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    PublicComponent,
    NavComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PublicModule { }
