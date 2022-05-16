import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
  searchCategory!: number;
  productList : any;

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.searchCategory = data['id'];
console.log(this.searchCategory);

      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
        this.productList = categoryData;
        console.log(this.productList);
        
      })
    })
  }

}
