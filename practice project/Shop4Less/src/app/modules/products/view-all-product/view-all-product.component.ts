import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList : any;
  errorMsg : string = '';

  constructor(private productService : ProductService,
    private loader: NgxUiLoaderService) {  }

  ngOnInit(): void {
    this.loader.start();

    this.productService.getAllProduct().subscribe(data => {
      this.productList = data;
      
      this.loader.stop();
    }, (error) => {
      this.errorMsg = error;
      console.log(error);      
    })
  }

}
