import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  dept_id:any; 
  emp_id:any;
  employee:Employee=new Employee(0,"","","","",0,0);
  message=""
    constructor(private activatedroute:ActivatedRoute,private employeeService:EmployeeService,private route:Router)
     { }
  ngOnInit(): void {
    this.dept_id=this.activatedroute.snapshot.params["dept_id"];
    this.emp_id=this.activatedroute.snapshot.params["emp_id"];
    this.employeeService.getEmployeeById(this.emp_id).subscribe(
      (data:any)=>{this.employee=data,
      console.log(data)},

     
      error=>console.log(error),
       
    )
      }
      logOut()
      {
        this.route.navigate(['/welcomepage'])
      }

      updateEmployee()
  {
    this.employeeService.updateEmployeeService(this.emp_id,this.employee).subscribe(
      data=>{console.log(data),
        alert("updated successfully")
      this.route.navigate(['employeelist',this.dept_id])},
      error=>console.log("update failed")
    )
  }
}
