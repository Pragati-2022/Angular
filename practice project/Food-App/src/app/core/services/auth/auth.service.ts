import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/shared/model/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<any> | undefined;

  constructor(
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router
  ) {
    this.userCollection = this.fireStore.collection('users');
    this.isAuthenticated$ = this.auth.user;
  }

  async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('User not provided password');
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    if (!userCred.user) {
      throw new Error('user can"t be found');
    }

    await this.userCollection.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
    });
  }

  async login(email: string, password: string, role : string) {
    await this.auth.signInWithEmailAndPassword(email, password);
    sessionStorage.setItem('user', email);
    sessionStorage.setItem('role', role);

  }

  async logOut() {
    await this.auth.signOut();

    sessionStorage.removeItem('user');

    this.router.navigate(['login']);
  }

  haveRoleAccess(route : any){
  
    const role = sessionStorage.getItem('role');
console.log(route);

    if(role === 'admin'){
      return true;
    }
    else{
      if(route === 'list-product'){
        return true
      }
      else{
        return false
      }
    }
  }
}
