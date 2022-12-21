import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user: any;
  userList:any;
  //message:any;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.adminLoginService(this.user).subscribe(
      (data:any) => this.userList = data,
      (error:any) => console.log(error)
    )
  }
  logOut()
  {
    this.router.navigate(['/welcomepage'])
  }

}
