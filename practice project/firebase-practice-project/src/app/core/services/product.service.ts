import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productForEdit : IProduct | null =  null;
  public productCollection: AngularFirestoreCollection<IProduct>;

  constructor(private fireStore : AngularFirestore, private auth : AngularFireAuth) {
      this.productCollection = fireStore.collection('products');
  }

  createProduct(data : IProduct) : Promise<DocumentReference<IProduct>> {
    return this.productCollection.add(data);
  }

  getProduct(){
    // return this.productCollection
    // .snapshotChanges()
    //   .pipe(
    //     map((snaps) =>
    //       snaps.map((snap) => {
    //         return ({id : snap.payload.doc.id, ...snap.payload.doc.data() as IProduct})
    //       }),
    //     ),
    //     first(),
    //   );

    return this.auth.user.pipe(
      switchMap(user => {
        if(!user)
        return of([])

      const query = this.productCollection.ref.where(
        'uid', '==', user.uid
      )

      return query.get()
      }),
      map(sanpshot => (sanpshot as QuerySnapshot<IProduct>).docs)
      )
  }

  updateProduct(product : IProduct){
    console.log(product);
    
    this.productCollection.doc(product.docId).update(product)
  }

  async deleteProduct(product : IProduct){
    this.productCollection.doc(product.docId).delete()
  }
}
