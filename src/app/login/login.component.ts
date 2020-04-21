import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: string;
password: string;


credentials = { "username": this.username, "password": this.password};



  constructor(private userService: UserService, private router: Router, private location: Location) {
   }

  ngOnInit(): void {

   
   
    
  }
  

  login() { 
    
    this.userService.login(this.credentials).subscribe( response => {
      sessionStorage.setItem("userId", response.userId);
      sessionStorage.setItem("username", response.username);
    })
    
    window.location.reload
    this.router.navigate(['/home']);

  }

}
