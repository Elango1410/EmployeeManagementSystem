import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HR } from '../hr';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-create-hr',
  templateUrl: './create-hr.component.html',
  styleUrls: ['./create-hr.component.css']
})
export class CreateHrComponent {
  hr=new HR(0,"","",0);
  dept_id: any;
 
 
    constructor(private hrService:HrService,private router:Router,private activatedroute:ActivatedRoute) { }
  
    ngOnInit(): void {
    }
    saveHr(){
      console.log(this.hr)
      this.dept_id=this.activatedroute.snapshot.params["dept_id"];
      this.hrService.createHrService(this.hr,this.dept_id).subscribe( data =>{
        console.log(data);
        alert("added successfully")
        this.goToHrList();
      },
      error => console.log(error));
    }
  
    goToHrList(){
      this.router.navigate(['/hrlist',this.dept_id]);
    }
    
    onSubmit(){
      console.log(this.hr);
      this.saveHr();
    }
    logOut()
  {
    this.router.navigate(['/welcomepage'])
  }
}
