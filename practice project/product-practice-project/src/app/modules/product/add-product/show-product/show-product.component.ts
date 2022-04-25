import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/modules/shared/model/product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
})
export class ShowProductComponent implements OnInit {
  products!: IProduct[];
  recentActiveRouteId!: string;

  constructor(
    private _productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._productService.getProduct().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });

    this.activeRoute.paramMap.subscribe((params : ParamMap) => {
      this.recentActiveRouteId = String(params.get('id'));
    })
  }

  onView(product: IProduct) {
    this.router.navigate([product.id], { relativeTo: this.activeRoute });
  }

  onEdit(product : IProduct){
    this._productService.editProduct = product;
    this.router.navigate(['add-product']);
  }

  onDelete(product : IProduct){
    this._productService.deleteProduct(product);
    alert('successfully deleted!');
  }
}
