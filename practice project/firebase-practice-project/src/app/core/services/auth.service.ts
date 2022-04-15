import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean> | undefined;
  private redirect = false;

  constructor(
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.userCollection = fireStore.collection('users');
  }

  async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('password not provided!');
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    if (!userCred.user) {
      throw new Error('user can"t be found');
    }
    await this.userCollection.doc(userCred.user.uid).set({
      userName: userData.userName,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    });

    // await userCred.user.updateProfile({
    //   displayName: userData.userName,
    // });
  }

  async login(email: string, password: string){
    await this.auth.signInWithEmailAndPassword(email, password);

    this.isAuthenticated$ = this.auth.user.pipe(map((user) => !!user));
    
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => this.activeRoute.firstChild),
      switchMap((route) => route?.data ?? of({}))
    ).subscribe((data) => {
      this.redirect = data['authOnly'] ?? false;
    });
  }

  public async logout($event: Event) {
    $event.preventDefault();

    await this.auth.signOut();

    if(this.redirect){  
    await this.router.navigate(['/']);
    }
  }
}