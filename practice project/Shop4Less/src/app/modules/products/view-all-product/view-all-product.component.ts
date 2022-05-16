import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList : any;
  errorMsg : string = '';

  constructor(private productService : ProductService) {  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {
      this.productList = data;
    }, (error) => {
      this.errorMsg = error;
      console.log(error);      
    })
  }

}
