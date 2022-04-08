import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
  laptopId! : number;
  constructor(private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    // this.laptopId = Number(this.activeRoute.snapshot.paramMap.get('id'));

    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.laptopId = Number(params.get('id'));
    })
  }

  goPrevious(){
    let previousId = this.laptopId - 1;
    this.router.navigate(['product/laptop', previousId])
  }
  goNext(){
    let nextId = this.laptopId + 1;
    this.router.navigate(['product/laptop', nextId])
  }
  goBack(){
    let selectedId = this.laptopId ? this.laptopId : null;
    this.router.navigate(['product/laptop', {id: selectedId}])
  }
}
