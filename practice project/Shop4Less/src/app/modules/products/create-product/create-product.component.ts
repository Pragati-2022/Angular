import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/core/services/product/product.service';
import { IProduct } from '../../shared/model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  addProductForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    private formBuider: FormBuilder,
    private productService: ProductService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addProductForm = this.formBuider.group({
      productName: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      description: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      productColor: ['', [Validators.required]],
      isAvailable: ['', [Validators.required]],
      productPrice: ['', [Validators.required]],
      review: ['', [Validators.required]],
    });
  }

  get _addProductForm() {
    return this.addProductForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.addProductForm.valid) {

      this.loader.start();

      let product: IProduct = {
        categoryId: this._addProductForm['categoryId'].value,
        productName: this._addProductForm['productName'].value,
        description: this._addProductForm['description'].value,
        rating: this._addProductForm['rating'].value,
        price: this._addProductForm['productPrice'].value,
        isAvailable: this._addProductForm['isAvailable'].value,
        color: this._addProductForm['productColor'].value,
        reviews: this._addProductForm['review'].value,
      };

      this.productService.createProduct(product).subscribe((data) => {
        console.log(data);

        this.loader.stop();
      });

      alert('Product added successfully!');
      this.initializeForm();
      this.isFormSubmitted = false;
    }
  }
}
