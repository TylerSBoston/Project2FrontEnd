import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    //destroy info in sessionStorage + mark person has logged out
    this.authService.destroyEmployee();
    this.authService.loggedIn = false;
    this.router.navigate(['login']);


  }

}
