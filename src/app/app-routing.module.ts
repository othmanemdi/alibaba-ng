import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LoginComponent } from './public/auth/login/login.component';
import { CartComponent } from './public/pages/cart/cart.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ShopComponent } from './public/pages/shop/shop.component';

import { PublicComponent } from './public/public.component';

const routes: Routes = [
    {
        path: '', component: PublicComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'cart', component: CartComponent },
            { path: 'login', component: LoginComponent },
        ]
    },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }