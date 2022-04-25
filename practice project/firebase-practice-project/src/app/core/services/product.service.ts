import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { first, map } from 'rxjs/operators';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productCollection: AngularFirestoreCollection<IProduct>;

  constructor(private fireStore : AngularFirestore) {
      this.productCollection = fireStore.collection('products');
  }

  createProduct(data : IProduct) : Promise<DocumentReference<IProduct>> {
    return this.productCollection.add(data);
  }

  getProduct(){
    return this.productCollection
    .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map((snap) => {
            return ({id : snap.payload.doc.id, ...snap.payload.doc.data() as IProduct})
          }),
        ),
        first(),
      );
  }
}
