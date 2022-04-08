import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  
  recentActiveRouteId! : number;

  laptops = [
    {id : 1, name : 'laptop1'},
    {id : 2, name : 'laptop2'},
    {id : 3, name : 'laptop3'},
    {id : 4, name : 'laptop4'},
    {id : 5, name : 'laptop5'},
  ]
  constructor(private router : Router, private activeRoute : ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      this.recentActiveRouteId = Number(param.get('id'));
    })
  }

  onSelect(laptop : any){
    this.router.navigate(['product/laptop', laptop.id])
    console.log(laptop);
  }

}
