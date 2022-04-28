import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
} from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last, switchMap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  file: File | null = null;
  isFormSubmitted = false;
  percentage = 0;
  showPercentage = false;
  user: firebase.User | null = null;
  task?: AngularFireUploadTask;
  products: IProduct[] = [];

  title = new FormControl('', [Validators.required, Validators.minLength(3)]);
  id = new FormControl('');

  uploadForm = new FormGroup({
    title: this.title,
    id: this.id,
  });
  constructor(
    private storage: AngularFireStorage,
    private fireAuth: AngularFireAuth,
    private _productService: ProductService,
    private router: Router
  ) {
    this.fireAuth.user.subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    // this._productService.getProduct().subscribe((data) => {
    //   this.products = data;
    //   console.log(data);
    // });

    this._productService.getProduct().subscribe((docs) => {
      docs.forEach((doc) => {
        this.products.push({
          docId: doc.id,
          ...doc.data(),
        });
      });

      console.log(docs);
    });
    // this.activeRoute.data.subscribe(console.log)
  }

  ngOnDestroy() {
    this.task?.cancel();
  }

  jumpTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });

    if (section == 'edit') {
      this.uploadForm.controls['title'].setValue(
        this._productService.productForEdit?.title
      );
    }
  }

  storeFile(event: Event) {
    this.file = (event as DragEvent).dataTransfer
      ? (event as DragEvent).dataTransfer?.files.item(0) ?? null
      : (event.target as HTMLInputElement).files?.item(0) ?? null;
    console.log(this.file);

    this.title.setValue(this.file?.name);
  }

  async uploadFile() {
    this.uploadForm.disable();

    alert('Please wait! Your product is being uploaded.');
    this.showPercentage = true;

    const fileName = uuid();

    const filePath = `products/${fileName}`;

    this.task = this.storage.upload(filePath, this.file);
    const productRef = this.storage.ref(filePath);

    this.task.percentageChanges().subscribe((progress) => {
      this.percentage = (progress as number) / 100;
    });

    this.task
      .snapshotChanges()
      .pipe(
        last(),
        switchMap(() => productRef.getDownloadURL())
      )
      .subscribe({
        next: async (url) => {
          if (this._productService.productForEdit) {
            alert('hii');
            try {
              const product = {
                uid: this._productService.productForEdit.uid,
                displayName: this.user?.displayName as string,
                title: this.title.value,
                fileName: `${fileName}`,
                url,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
              };
              console.log(this._productService.productForEdit.docId);

              this._productService.updateProduct(product);

              this._productService.productForEdit = null;
            } catch (e) {
              console.log(e);
            }
          } else {
            const product = {
              uid: this.user?.uid as string,
              displayName: this.user?.displayName as string,
              title: this.title.value,
              fileName: `${fileName}`,
              url,
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            };

            const productDocRef = await this._productService.createProduct(
              product
            );

            console.log(product);

            this.showPercentage = false;
            alert('successfully uploaded!');

            setTimeout(() => {
              this.router.navigate(['products', productDocRef.id]);
            }, 1000);
          }
        },
        error: (error) => {
          this.uploadForm.enable();

          this.showPercentage = false;
          alert('Error occurr!');
          console.error(error);
        },
      });
  }

  onEdit(product: IProduct) {
    this._productService.productForEdit = product;
  }

  async onDelete(product: IProduct) {
    const fileName = product.fileName.split(".")[0];
    console.log(fileName);
    
    const productRef = this.storage.ref(`products/${fileName}`);

    productRef.delete();

    try {
     await this._productService.deleteProduct(product);
    }
    catch(e){
      console.log(e);
    }
  }
}
