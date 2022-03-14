import { Component, OnInit } from '@angular/core';
import { AuthService } from '../employee/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean{
    return this.authService.loggedIn;
  }
  isValid(role: number): boolean {
    return this.authService.loggedInPermissions.has(role);
  }

}
