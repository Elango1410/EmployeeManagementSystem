import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  dept_id:any;
  department:Department=new Department(0,"");
  message=""
    constructor(private activatedroute:ActivatedRoute,private departmentService:DepartmentService,private route:Router)
     { }
  
    ngOnInit(): void {
  this.dept_id=this.activatedroute.snapshot.params["dept_id"];
  this.departmentService.getDepartmentByIdService(this.dept_id).subscribe(
    data=>this.department=data,
   
    error=>console.log(error),
     
  )
    }
    updateDepartment()
    {
      this.departmentService.updateDepartmentService(this.dept_id,this.department).subscribe(
        data=>{console.log(data),
          alert("updated successfully")
        this.route.navigate(['/departmentlist'])},
        error=>console.log("update failed")
      )
    }
    logOut()
    {
      this.route.navigate(['/welcomepage'])
    }
}
