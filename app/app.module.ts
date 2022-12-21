import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateHrComponent } from './create-hr/create-hr.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HrListComponent } from './hr-list/hr-list.component';
import { UpdateHrComponent } from './update-hr/update-hr.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';



@NgModule({
  declarations: [
    AppComponent,
   
  
  
    
    UserHomeComponent,
    WelcomePageComponent,
    
   
    
    AdminHomeComponent,
         AdminLoginComponent,
         ContactUsComponent,
         AboutUsComponent,
        
       
         DepartmentHomeComponent,
         CreateDepartmentComponent,
         DepartmentListComponent,
         EmployeeListComponent,
         CreateHrComponent,
         CreateEmployeeComponent,
         HrListComponent,
         UpdateHrComponent,
         UpdateEmployeeComponent,
         UpdateDepartmentComponent,
         RegisterAdminComponent
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
