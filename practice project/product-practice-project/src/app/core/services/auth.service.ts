import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/modules/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userCollection: AngularFirestoreCollection<IUser>;
  isAuthenticated$!: Observable<boolean>;
  redirect = false;

  constructor(
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.userCollection = fireStore.collection('users');
    this.isAuthenticated$ = this.auth.user.pipe(map((user) => !!user));
  }

  async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('password is provided');
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    await this.userCollection.doc(userCred.user?.uid).set({
      name: userData.name,
      email: userData.email,
      address: userData.address,
      city: userData.city,
      zipCode: userData.zipCode,
    });
  }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password);

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => this.activeRoute.firstChild),
        switchMap((route) => route?.data ?? of({}))
      )
      .subscribe((data) => {
        this.redirect = data['authOnly'] ?? false;
      });
  }

  async logout(event: Event) {
    event.preventDefault();

    await this.auth.signOut();

    if (this.redirect) await this.router.navigate(['login']);
  }
}
