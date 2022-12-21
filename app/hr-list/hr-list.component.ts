import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HR } from '../hr';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-hr-list',
  templateUrl: './hr-list.component.html',
  styleUrls: ['./hr-list.component.css']
})
export class HrListComponent implements OnInit {
  hrList:any;
  dept_id:any
  constructor(private hrService:HrService,private route:Router,private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    this.dept_id=this.activatedRout.snapshot.params["dept_id"];
    this.getHrList();
  }

 
  
 private getHrList()
{
  
    this.hrService.getHrListService(this.dept_id).subscribe(data => {
      this.hrList = data;
    });}

 updateHr(hr_id:number)
  {
    this.route.navigate(['/updatehr',hr_id,this.dept_id]);
  }
deleteHr(hr_id:number)
{
 
this.hrService.deleteHrService(hr_id).subscribe(
  data=>{console.log("succuss"),
  this.getHrList();},
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
