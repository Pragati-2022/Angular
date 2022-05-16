import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/core/services/product/product.service';
import { IProduct } from '../../shared/model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = '';
  productDetails!: IProduct;
  updateProductForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private formBuider: FormBuilder,
    private loader: NgxUiLoaderService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loader.start();

    this.activatedRoute.params.subscribe((data) => {
      this.productId = data['id'];
  // console.log(this.productId);
  
      this.productService
        .viewProduct(this.productId)
        .subscribe((productData) => {
          this.loader.stop();

          this.productDetails = productData;
          console.log(this.productDetails);
          this.updateProductForm.get('productName')?.setValue(this.productDetails?.productName);
          this.updateProductForm.get('categoryId')?.setValue(this.productDetails?.categoryId);
          this.updateProductForm.get('description')?.setValue(this.productDetails?.description);
          this.updateProductForm.get('rating')?.setValue(this.productDetails?.rating);
          this.updateProductForm.get('productColor')?.setValue(this.productDetails?.color);
          this.updateProductForm.get('isAvailable')?.setValue(this.productDetails?.isAvailable);
          this.updateProductForm.get('productPrice')?.setValue(this.productDetails?.price);
          this.updateProductForm.get('review')?.setValue(this.productDetails?.reviews);
        });
    });    
  }

  initializeForm() {
    this.updateProductForm = this.formBuider.group({
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

  get _updateProductForm() {
    return this.updateProductForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.updateProductForm.valid) {
      this.loader.start();

      let product: IProduct = {
        id: this.productId,
        categoryId: this._updateProductForm['categoryId'].value,
        productName: this._updateProductForm['productName'].value,
        description: this._updateProductForm['description'].value,
        rating: this._updateProductForm['rating'].value,
        price: this._updateProductForm['productPrice'].value,
        isAvailable: this._updateProductForm['isAvailable'].value,
        color: this._updateProductForm['productColor'].value,
        reviews: this._updateProductForm['review'].value,
      };

      this.productService.updateProduct(this.productId , product).subscribe((data) => {
        console.log(data);

        this.loader.stop();
      });

      alert('Product updated successfully!');
      this.initializeForm();
      this.isFormSubmitted = false;
    }
  }
}
