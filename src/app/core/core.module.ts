import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatToolbarModule
  ]
})
export class CoreModule {
}
