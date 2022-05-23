import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, from, toArray } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { IProduct } from 'src/app/modules/shared/model/product';

@Component({
  selector: 'app-show-product-by-category',
  templateUrl: './show-product-by-category.component.html',
  styleUrls: ['./show-product-by-category.component.css'],
}) 
export class ShowProductByCategoryComponent implements OnInit {
  products!: IProduct[];

  constructor(
    private activatedroute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe((data) => {
      console.log(data['category']);
      let category = data['category'];
      this.userService.getProduct().subscribe((data) => {
        from(data)
          .pipe(
            filter((product) => product.productCategory === category),
            toArray()
          )
          .subscribe((data) => (this.products = data));
      });
    });
  }
}
