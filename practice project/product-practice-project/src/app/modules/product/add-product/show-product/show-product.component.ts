import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { filter, from, map, Observable, switchAll } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/modules/shared/model/product';
import { IUser } from 'src/app/modules/shared/model/user';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
})
export class ShowProductComponent implements OnInit {
  products!: IProduct[];
  recentActiveRouteId!: string;
  userData$!: Observable<any> | null;

  constructor(
    private _productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this._productService.getProduct().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });

    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.recentActiveRouteId = String(params.get('id'));
    });

    let user$ = this.auth.user;
    let email: string | null | undefined = '';
    user$.subscribe((data) => {
      email = data?.email;
    });

    this.userData$ = this.fireStore
      .collection('users')
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map((snap) => {
            return {
              id: snap.payload.doc.id,
              ...(snap.payload.doc.data() as IUser),
            };
          })
        ),
        switchAll(),
        filter((user) => user.email === email)
      );
  }

  onView(product: IProduct) {
    this.router.navigate([product.id], { relativeTo: this.activeRoute });
  }

  onEdit(product: IProduct) {
    this._productService.editProduct = product;
    this.router.navigate(['add-product']);
  }

  onDelete(product: IProduct) {
    this._productService.deleteProduct(product);
    alert('successfully deleted!');
  }
}
