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
  role: boolean = false;

  constructor(
    private authService: AuthService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // let role = localStorage.getItem('userRole');
    // console.log(role);

    // if (role === 'true') {
    //   return true;
    // } else {
    //   if (route.url[0].path === 'show-product') {
    //     return true;
    //   } else {
    //     alert('you have not access');
    //     return false;
    //   }
    // }

    let user$ = this.auth.user;
    let email: string | null | undefined = '';
    user$.subscribe((data) => {
      email = data?.email;
    });

    this.authService.isAdminLoggedIn().subscribe((data) => {
      console.log(data);
      from(data)
        .pipe(filter((user) => user.email === email))
        .subscribe((loggedUserData) => {
          this.role = loggedUserData.role;
        });
    });

    if (this.role) return true;
    else {
      if (route.url[0].path === 'show-product') {
        return true;
      } else {
        alert('you have not access');
        return false;
      }
    }
  }
}
