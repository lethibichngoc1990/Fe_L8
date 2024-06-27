import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  constructor(private router:  Router) {}


  ngOnInit(): void {
  }

  onButtonClick(){
    console.log("Clicked"),
    this.router.navigate(['/tutorial'])


  }
}
