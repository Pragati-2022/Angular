import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IProduct } from 'src/app/modules/shared/model/product';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  productCollection: AngularFirestoreCollection<IProduct>;
  products! : Observable<IProduct[]>;
  editProduct : IProduct | null = null;

  constructor(
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) {
    this.productCollection = fireStore.collection('products');
  }

  async createProduct(product: IProduct) {
    await this.fireStore.collection('products').add(product);
  }

  getProduct() {
    return this.fireStore
      .collection('products')
      .snapshotChanges()
      .pipe(
        map((snaps) => 
          snaps.map((snap) => {
            return ({
              id: snap.payload.doc.id,
              ...snap.payload.doc.data() as IProduct,
            });
          }),
        ),
        first(),
      );
      return this.products;
  }

  async updateProduct(product : IProduct): Promise<void> {      
    await this.fireStore.collection('products').doc(product.id).update(product);
  }    
  
  async deleteProduct(product : IProduct): Promise<void> {      
    await this.fireStore.collection('products').doc(product.id).delete();
  } 
}
