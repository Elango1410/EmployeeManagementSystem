import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: any;
dept_id:any;
  constructor(private employeeService:EmployeeService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dept_id=this.activatedRoute.snapshot.params["dept_id"];
    this.getEmployeeList();
  }

 
  
 private getEmployeeList()
{
  this.employeeService.getEmployeeListService(this.dept_id).subscribe(data => {
    this.employeeList = data;
  });}

 updateEmployee(emp_id:number)
  {
    this.route.navigate(['/updateemployee',emp_id,this.dept_id]);
  }
deleteEmployee(emp_id:number)
{
 
this.employeeService.deleteEmployeeService(emp_id).subscribe(
  data=>{console.log("succuss"),
  this.getEmployeeList();},
  error=>console.log("error")
)
}

logOut()
{
this.route.navigate(['/welcomepage'])
}

back()
{
this.route.navigate(['/departmentlist'])
}
}
