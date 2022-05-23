import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { IProduct } from 'src/app/modules/shared/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  isFormSubmitted = false;
  product!: IProduct;

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    if (this.userService.editProduct) {
      this.addProductForm
        .get('productName')
        ?.setValue(this.userService.editProduct.productName);
      this.addProductForm
        .get('productCategory')
        ?.setValue(this.userService.editProduct.productCategory);
      this.addProductForm
        .get('productPrice')
        ?.setValue(this.userService.editProduct.productPrice);
      this.addProductForm
        .get('productQuantity')
        ?.setValue(this.userService.editProduct.productQuantity);
      this.addProductForm
        .get('productColor')
        ?.setValue(this.userService.editProduct.productColor);
      this.addProductForm
        .get('productLotSize')
        ?.setValue(this.userService.editProduct.productLotSize);
      this.addProductForm
        .get('productDescription')
        ?.setValue(this.userService.editProduct.productDescription);
    }
  }

  initializeForm() {
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productPrice: ['', Validators.required],
      productQuantity: ['', Validators.required],
      productColor: ['', Validators.required],
      productLotSize: ['', Validators.required],
      productDescription: ['', Validators.required],
    });
  }

  get _addProductForm() {
    return this.addProductForm.controls;
  }

  async onSubmit() {
    this.isFormSubmitted = true;

    if (this.addProductForm.valid) {
      if (this.userService.editProduct) {
        this.product = {
          id: this.userService.editProduct.id,
          productName: this._addProductForm['productName'].value,
          productCategory: this._addProductForm['productCategory'].value,
          productPrice: this._addProductForm['productPrice'].value,
          productQuantity: this._addProductForm['productQuantity'].value,
          productColor: this._addProductForm['productColor'].value,
          productLotSize: this._addProductForm['productLotSize'].value,
          productDescription: this._addProductForm['productDescription'].value,
        };

        this.userService.updateProduct(this.product);
        alert('Edited successfully!');
        this.userService.editProduct = null;
      } else {
        this.product = {
          productName: this._addProductForm['productName'].value,
          productCategory: this._addProductForm['productCategory'].value,
          productPrice: this._addProductForm['productPrice'].value,
          productQuantity: this._addProductForm['productQuantity'].value,
          productColor: this._addProductForm['productColor'].value,
          productLotSize: this._addProductForm['productLotSize'].value,
          productDescription: this._addProductForm['productDescription'].value,
        };

        await this.userService.createProduct(this.product);
        alert('added successfully!');
      }
    }
  }
}
