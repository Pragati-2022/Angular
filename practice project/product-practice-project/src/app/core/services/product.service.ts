import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { first, map } from "rxjs/operators";
import { IProduct } from "src/app/modules/shared/model/product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    editProduct : IProduct | null = null;

    constructor(private auth : AngularFireAuth, private fireStore : AngularFirestore){ }

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
    }
  
    async updateProduct(product : IProduct): Promise<void> {      
      await this.fireStore.collection('products').doc(product.id).update(product);
    }    
    
    async deleteProduct(product : IProduct): Promise<void> {      
      await this.fireStore.collection('products').doc(product.id).delete();
    }    

}