import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated : any;

  constructor(public authService : AuthService, private router : Router, private activatedRoute: ActivatedRoute) {
    this.authService.isAuthenticated$?.subscribe(data => 
      this.isAuthenticated = data
      )
   }

  ngOnInit(): void {
  }

  onAdd(){
  this.router.navigate(['list-product/add-product']);
  }
}
