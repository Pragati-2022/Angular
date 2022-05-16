import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ICategory } from '../model/category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList : any;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categoryList = data;
      console.log(this.categoryList);
      
    })
  }

}
