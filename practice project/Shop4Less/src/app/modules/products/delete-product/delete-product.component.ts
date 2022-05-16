import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private loader : NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.loader.start();

    this.activatedRoute.params.subscribe((data) => {
      this.productId = data['id'];
  // console.log(this.productId);
  
      this.productService
        .deleteProduct(this.productId)
        .subscribe((productData) => {
          console.log(productData);

          this.loader.stop();

          console.log('deleted');
        });
    });
  }


}
