import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './employee/login/login.component';
import { LogoutComponent } from './employee/logout/logout.component';
import { ListReimbursementComponent } from './reimbursement/list-reimbursement/list-reimbursement.component';
import { EditReimbursementComponent } from './reimbursement/edit-reimbursement/edit-reimbursement.component';
import { ViewReimbursementsComponent } from './finance-manager-view/view-reimbursements/view-reimbursements.component';
import { FinanceManagerComponent } from './finance-manager-view/finance-manager/finance-manager.component';
import { ViewEmployeesComponent } from './finance-manager-view/view-employees/view-employees.component';
import { FinanceManagerGuard } from './guards/finance-manager.guard';


const routes: Routes = [
 
  {path: "list-reimbursement",component:ListReimbursementComponent},
  {path: "header", component: HeaderComponent},
  {path: "edit-reimbursement", component: EditReimbursementComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "managerView", component:FinanceManagerComponent, canActivate: [FinanceManagerGuard]},
  {path: "managerViewReimbursements", component:ViewReimbursementsComponent, canActivate: [FinanceManagerGuard]},
  {path: "managerViewEmployees", component:ViewEmployeesComponent, canActivate: [FinanceManagerGuard]}
  

  //prefix with colon to tell its a route parameter
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
