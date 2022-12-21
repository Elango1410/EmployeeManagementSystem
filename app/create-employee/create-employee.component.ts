import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee=new Employee(0,"","","","",0,0);
  dept_id: any;
 
 
    constructor(private employeeService:EmployeeService,private router:Router,private activatedroute:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.dept_id=this.activatedroute.snapshot.params["dept_id"];
    }
    saveEmployee(){
      this.employeeService.createEmployeeService(this.employee,this.dept_id).subscribe( data =>{
        console.log(data);
        alert("Employee is added successfully")
        this.goToEmployeeList();
      },
      error => console.log(error));
    }
  
    goToEmployeeList(){
      this.router.navigate(['/employeelist',this.dept_id]);
    }
    
    onSubmit(){
      console.log(this.employee);
      this.saveEmployee();
    }
    logOut()
  {
    this.router.navigate(['/welcomepage'])
  }

}
