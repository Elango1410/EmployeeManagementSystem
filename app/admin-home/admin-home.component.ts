import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logOut()
{
  this.route.navigate(['/welcomepage'])
}
addDepartment(){
  this.route.navigate(['/createdepartment'])
}
viewDepartment(){
  this.route.navigate(['/departmentlist'])
}

}
