import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './employee/login/login.component';
import { LogoutComponent } from './employee/logout/logout.component';
import { EditReimbursementComponent } from './reimbursement/edit-reimbursement/edit-reimbursement.component';
import { ListReimbursementComponent } from './reimbursement/list-reimbursement/list-reimbursement.component';
import { ViewEmployeesComponent } from './finance-manager-view/view-employees/view-employees.component';
import { ViewReimbursementsComponent } from './finance-manager-view/view-reimbursements/view-reimbursements.component';
import { FinanceManagerComponent } from './finance-manager-view/finance-manager/finance-manager.component';
import { HttpClientModule } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    EditReimbursementComponent,
    ListReimbursementComponent,
    FinanceManagerComponent,
    ViewEmployeesComponent,
    ViewReimbursementsComponent,
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
