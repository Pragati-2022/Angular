import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable, of } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
import { IProduct } from "src/app/modules/shared/model/product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    editProduct : IProduct | null = null;
    productCollection: AngularFirestoreCollection<IProduct>;
    products! : Observable<IProduct[]>;

    constructor(private auth : AngularFireAuth, private fireStore : AngularFirestore){
      this.productCollection = fireStore.collection('products');
      this.products = this.productCollection.valueChanges();
     }

    async createProduct(product : IProduct){
        await this.fireStore.collection('products').add(product);
    }

    getProduct(){
      return  this.fireStore.collection('products')
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map((snap) => {
            return ({id : snap.payload.doc.id, ...snap.payload.doc.data() as IProduct})
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