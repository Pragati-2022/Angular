import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/core/services/product/product.service';
import { IProduct } from '../../shared/model/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productId = '';
  productDetails!: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.loader.start();

    this.activatedRoute.params.subscribe((data) => {
      this.productId = data['id'];
  // console.log(this.productId);
  
      this.productService
        .viewProduct(this.productId)
        .subscribe((productData) => {
          this.productDetails = productData;

          this.loader.stop();
          // console.log(this.productDetails);
        });
    });
  }
}
