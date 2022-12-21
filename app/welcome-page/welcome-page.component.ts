import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
 
  adminRegister()
{
  this.route.navigate(['/userRegister'])
}
adminLogin()
{
  this.route.navigate(['/userLogin'])
}
contactUs()
{
  this.route.navigate(['/contact'])
}
aboutUs()
{
  this.route.navigate(['/aboutus'])
}

}
