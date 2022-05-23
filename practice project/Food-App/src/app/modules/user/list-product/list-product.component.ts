import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { IProduct } from '../../shared/model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products!: IProduct[];

  constructor(private userService: UserService, private router : Router, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.userService.getProduct().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  onView(product : IProduct){

  }

  onEdit(product : IProduct){
    this.userService.editProduct = product;
    this.router.navigate(['list-product/add-product']);
  }

  onDelete(product : IProduct){
    this.userService.deleteProduct(product);
    alert('successfully deleted!');
  }

  oncategory(category : string){
    this.router.navigate(['show-product-by-category'], { relativeTo : this.activatedRoute, queryParams: {
      category: category
    },})
  }
}
