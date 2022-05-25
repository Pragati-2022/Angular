import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, from, Observable, pluck } from 'rxjs';
import { IUser } from 'src/app/modules/shared/model/user';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, OnInit {
  constructor(
    private authService: AuthService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {


    let user$ = this.auth.user;
    let email: string | null | undefined = '';
    user$.subscribe((data) => {
      email = data?.email;
    });

    let role: boolean = false;

    if(this.authService.isAdminLoggedIn()){
     this.authService.isAdminLoggedIn().subscribe((data) => {
      console.log(data);
      from(data)
        .pipe(filter((user) => user.email === email)).subscribe(loggedUserData => {
          role = loggedUserData.role;

          console.log(role);// here get true
          
          return role;
        })
    });
    console.log(role); // here get false, i want true 
    
    return true
  }
  else
  {
    return false
  }
    //   console.log(data);
    //   from(data)
    //     .pipe(filter((user) => user.email === email))
    //     .subscribe((loggedUserData) => {

    //       loggedUserData.role;
    //       role = loggedUserData.role;
    //       console.log(role);

    // if (loggedUserData.role) {
    //   return true;
    // } else {
    //   if (route.url[0].path === 'show-product') {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    //     });
    // });

    // console.log(role);
  }
}
