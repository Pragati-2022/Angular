import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.activeRoute.data.subscribe(console.log)
  }

  jumpTo(section : string){
    document.getElementById(section)?.scrollIntoView({behavior : 'smooth'});
  }

}
