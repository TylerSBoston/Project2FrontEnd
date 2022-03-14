import { MapType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../employee/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){

  }
  canActivate( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //write logic for the guard here
      //find out if user has logged in or not, inject auth service
      if (this.authService.loggedIn) {
        const userRole = this.authService.loggedInPermissions;
        // if i cant get routing to work, then each user type gets its own guard =(
        if (this.authService.loggedInPermissions.has(route.data) ) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
  
      this.router.navigate(['/login']);
      return false;
  
  }
  
}
