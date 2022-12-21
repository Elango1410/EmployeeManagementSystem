import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateHrComponent } from './create-hr/create-hr.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HrListComponent } from './hr-list/hr-list.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateHrComponent } from './update-hr/update-hr.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [{ path: '', component:WelcomePageComponent},
  {path: 'adminhome',component:AdminHomeComponent},
  {path:'loginPage',component:AdminLoginComponent},
  {path:'userLogin',component:AdminLoginComponent},
  {path:'hrlist/:dept_id',component:HrListComponent},
  {path: 'userhome', component: UserHomeComponent},
  {path: 'createHr/:dept_id',component:CreateHrComponent},
  {path: 'contact', component:ContactUsComponent},
  {path: 'aboutus', component:AboutUsComponent},
  {path: 'adminLogin',component:AdminLoginComponent},
  {path: 'welcomepage',component:WelcomePageComponent},
  {path: 'createdepartment',component:CreateDepartmentComponent},
  {path: 'departmentlist',component:DepartmentListComponent},
  {path:'createEmployee/:dept_id',component:CreateEmployeeComponent},
  {path:'employeelist/:dept_id',component:EmployeeListComponent},
  {path:'updateemployee/:emp_id/:dept_id',component:UpdateEmployeeComponent},
  {path:'userRegister',component:RegisterAdminComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'updatehr/:hr_id/:dept_id',component:UpdateHrComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
