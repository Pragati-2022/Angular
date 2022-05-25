import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter, map, Observable, switchAll } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUser } from '../../model/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userData$!  : Observable<any> | null;

  constructor(public _authService : AuthService, private auth : AngularFireAuth,
    private fireStore : AngularFirestore) { }

  ngOnInit(): void {
    let user$ = this.auth.user;
    let email: string | null | undefined = '';
    user$.subscribe((data) => {
      email = data?.email;
    });

    this.userData$ = this.fireStore
      .collection('users')
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map((snap) => {
            return {
              id: snap.payload.doc.id,
              ...(snap.payload.doc.data() as IUser),
            };
          })
        ),
        switchAll(),
        filter((user) => user.email === email)
      );
  }

}
