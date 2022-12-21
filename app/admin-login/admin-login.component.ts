import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  admin: Admin = new Admin(0,"","","","");
message : any;
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
public adminLogin()
{
this.adminService.adminLoginService(this.admin).subscribe(
  data =>{console.log("Login success"),
  this.router.navigate(['/adminhome'])},
  error =>{console.log("Login Failed"),console.log(error),

  this.message="login failed.enter valid email and password"}
)

}
back()
{
  this.router.navigate(['/welcomepage'])
}
login(){
  this.router.navigate(['/adminhome'])
}
}