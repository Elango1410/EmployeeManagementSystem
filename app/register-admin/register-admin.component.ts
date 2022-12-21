import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit{
  admin: Admin = new Admin(0,"","","","");
  message:any;
    constructor(private adminService:AdminService,private router:Router) { }
  
    ngOnInit(): void {
     
    }
    public adminRegister(){
       this.adminService.adminRegisterService(this.admin).subscribe(
        data =>{console.log("Login Success"),
      this.router.navigate(['/adminlogin'])},
        error =>{console.log("Login Failed"),
      this.message="login failed. try again"})
      }
      back()
      {
        this.router.navigate(['/welcomepage'])
      }
  }
