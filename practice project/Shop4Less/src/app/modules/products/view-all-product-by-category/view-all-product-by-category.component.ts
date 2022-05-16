import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css'],
})
export class ViewAllProductByCategoryComponent implements OnInit {
  searchCategory!: number;
  productList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.loader.start();

    this.activatedRoute.params.subscribe((data) => {
      this.searchCategory = data['id'];
      console.log(this.searchCategory);

      this.productService
        .searchCategoryProduct(this.searchCategory)
        .subscribe((categoryData) => {
          this.productList = categoryData;

          this.loader.stop();
          console.log(this.productList);
        });
    });
  }
}
