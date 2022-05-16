import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  pluck,
  switchMap,
  toArray,
} from 'rxjs';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css'],
})
export class ViewAllProductComponent implements OnInit {
  productList: any;
  errorMsg: string = '';
  filteredProductList: any;
  isShowAllProduct = true;

  // @ts-ignore
  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  constructor(
    private productService: ProductService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.loader.start();

    this.productService.getAllProduct().subscribe(
      (data) => {
        this.productList = data;

        this.loader.stop();
      },
      (error) => {
        this.errorMsg = error;
        console.log(error);
      }
    );
  }

  getSearch(searchTerm: any) {
    return from(this.productList).pipe(
      filter((data: any) => data.productName.includes(searchTerm)),
      toArray()
    );
  }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;

    if (formValue) {
      formValue
        .pipe(
          filter(() => this.searchForm.value),
          pluck('searchTerm'),
          debounceTime(500),
          distinctUntilChanged(),
          switchMap((data) => this.getSearch(data))
        )
        .subscribe((res) => {
          console.log(res);
          this.filteredProductList = res;
          if (this.filteredProductList?.length > 0) {
            this.isShowAllProduct = false;
          } else {
            this.isShowAllProduct = true;
          }
        });
    }
  }
}
