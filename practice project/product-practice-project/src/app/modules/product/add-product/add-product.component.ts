import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from '../../shared/model/product';
import { NgxImageCompressService } from 'ngx-image-compress';
import { last, switchMap } from 'rxjs';
import firebase from 'firebase/compat/app';
import { v4 as uuidv4 } from 'uuid';
import { RegexUtility } from '../../shared/utility/regex-utility';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers : [RegexUtility]
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  isFormSubmitted = false;
  product!: IProduct;
  productImg: any;
  task?: AngularFireUploadTask;
  productRef: any;
  fileName!: string;

  constructor(
    private formBuilder: FormBuilder,
    public _productService: ProductService,
    private fireStore: AngularFirestore,
    private _imageCompress: NgxImageCompressService,
    private storage: AngularFireStorage,
    private _regexUtility : RegexUtility
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    if (this._productService.editProduct) {
      console.log('product');
      this.addProductForm
        .get('productName')
        ?.setValue(this._productService.editProduct.productName);
      this.addProductForm
        .get('category')
        ?.setValue(this._productService.editProduct.category);
      this.addProductForm
        .get('price')
        ?.setValue(this._productService.editProduct.price);
      this.addProductForm
        .get('description')
        ?.setValue(this._productService.editProduct.description);
    }
  }

  initializeForm() {
    this.addProductForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(this._regexUtility.pattern)]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      fileName: ['', [Validators.required]],
    });
  }

  get _addProductForm() {
    return this.addProductForm.controls;
  }

  upload(event: any) {
    const files = (event.target as HTMLInputElement).files?.item(0) ?? null;

    this.fileName = uuidv4();

    const filePath = `products/${this.fileName}`;

    this.storage.upload(filePath, files);
    this.task = this.storage.upload(filePath, files);
    this.productRef = this.storage.ref(filePath);
  }

  // compressFile() {
  //   this._imageCompress.uploadFile().then(({ image, orientation }) => {
  //     console.log(orientation);

  //     this._imageCompress
  //       .compressFile(image, orientation, 50, 50)
  //       .then((compressedImage) => {
  //         // this.productImg = compressedImage;
  //       });
  //   });
  // }

  async onAdd() {
    this.isFormSubmitted = true;

    if (this.addProductForm.valid) {
      if (this._productService.editProduct) {
        this.product = {
          id: this._productService.editProduct.id,
          productName: this._addProductForm['productName'].value,
          category: this._addProductForm['category'].value,
          price: this._addProductForm['price'].value,
          description: this._addProductForm['description'].value,
          image: this._productService.editProduct.image,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        };

        try {
          this._productService.updateProduct(this.product);
          alert('successfully edited!');

          this.initializeForm();
          this._productService.editProduct = null;
        } catch (e) {
          console.log(e);
          alert('Error occurr!');
        }
      } else {
        if (this.task) {
          this.task
            .snapshotChanges()
            .pipe(
              last(),
              switchMap(() => this.productRef.getDownloadURL())
            )
            .subscribe({
              next: async (url) => {
                this.product = {
                  productName: this._addProductForm['productName'].value,
                  category: this._addProductForm['category'].value,
                  price: this._addProductForm['price'].value,
                  description: this._addProductForm['description'].value,
                  image: url,
                  timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                  fileName: `${this.fileName}`,
                };
                console.log(this.product);

                await this._productService.createProduct(this.product);
                Swal.fire({
                  title: 'Are you sure want to add?',
                  showCancelButton: true,
                  confirmButtonText: 'Yes',
                  cancelButtonText: 'No'
                }).then((result) => {
                  if (result.value) {
                    Swal.fire(
                      'Added!',
                      'Your product has been added.',
                      'success'
                    )
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                      'Cancelled',
                      'Your product has been not added.',
                      'error'
                    )
                  }
                })
              },
              error: (error) => {
                alert('Error occurr!');
                console.error(error);
              },
            });
        }
      }
    }
  }
}
