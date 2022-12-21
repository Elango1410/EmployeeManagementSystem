import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.css']
})
export class DepartmentHomeComponent  implements OnInit {
  department:Department[]|undefined;
  constructor(private departmentService:DepartmentService,private route:Router) { }

  ngOnInit(): void {
    this.getAllDepart();
  }
  getAllDepart(){
  this.route.navigate(['/'])
}
}
