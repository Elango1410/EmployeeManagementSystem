import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { HR } from '../hr';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-update-hr',
  templateUrl: './update-hr.component.html',
  styleUrls: ['./update-hr.component.css']
})
export class UpdateHrComponent implements OnInit{
  hr_id:any;
  dept_id:any;
  hr:HR=new HR(0,"","",0);
  message=""
    constructor(private activatedroute:ActivatedRoute,private hrService:HrService,private route:Router)
     { }
  
  ngOnInit(): void {
    this.dept_id=this.activatedroute.snapshot.params["dept_id"];
    this.hr_id=this.activatedroute.snapshot.params["hr_id"];
    this.hrService.getHrByIdService(this.hr_id).subscribe(
      (data:any)=>{this.hr=data,
     console.log(data)},
      error=>console.log(error),
       
    )
      }
      logOut()
      {
        this.route.navigate(['/welcomepage'])
      }

      updateHr()
  {
    this.hrService.updateHrService(this.hr_id,this.hr).subscribe(
      data=>{console.log(data),
        alert("updated successfully")
      this.route.navigate(['hrlist',this.dept_id])},
      error=>console.log("update failed")
    )
  }
}
