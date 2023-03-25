import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './body/nav/nav.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
