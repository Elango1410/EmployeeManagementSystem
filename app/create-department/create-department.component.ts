import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {
  department=new  Department(0,"");
  constructor(private departmentService:DepartmentService,private router:Router) { }

  ngOnInit(): void {
  }
  saveDepartment(){
    this.departmentService.createDepartmentService(this.department).subscribe( data =>{
      console.log(data);
      this.goToDepartmentList();
    },
    error => console.log(error));
  }
  goToDepartmentList(){
    this.router.navigate(['/departmentlist']);
  }
  
  onSubmit(){
    console.log(this.department);
    this.saveDepartment();
  }
  logOut()
{
  this.router.navigate(['/welcomepage'])
}
}
