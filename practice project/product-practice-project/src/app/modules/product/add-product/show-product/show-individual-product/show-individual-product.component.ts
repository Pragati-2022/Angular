import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/modules/shared/model/product';

@Component({
  selector: 'app-show-individual-product',
  templateUrl: './show-individual-product.component.html',
  styleUrls: ['./show-individual-product.component.css'],
})
export class ShowIndividualProductComponent implements OnInit {
  img = 'assets/image/1.png';
  productId: any;
  product!: IProduct;

  constructor(
    private activeRoute: ActivatedRoute,
    private _productService: ProductService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id');
    });

    this._productService
      .getProduct()
      .pipe()
      .subscribe((data) => {
        from(data)
          .pipe(filter((e) => e.id === this.productId))
          .subscribe((e) => {
            this.product = e;
          });
      });
  }

  goBack(){
    let selectedId = this.productId ? this.productId  : null;

    this.router.navigate(['../', { id : selectedId}], {relativeTo : this.activeRoute})
  }
}
