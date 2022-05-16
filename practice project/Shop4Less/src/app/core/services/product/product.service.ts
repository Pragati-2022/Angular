import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ICategory } from 'src/app/modules/shared/model/category';
import { IProduct } from 'src/app/modules/shared/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProduct() : Observable<IProduct> {
    const productUrl = 'http://localhost:3000/products';

    let httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'myproject3008$@$',
      'timeOutSeconds' : '3000'
    });
  
    //custom headers
    // httpHeaders = httpHeaders.set('myproject-id' , '118');
    httpHeaders = httpHeaders.append('myproject-id' , '118');

    let time  = httpHeaders.get('timeOutSeconds');

    if(time === '3000'){
      //at the API - we can check if authorization is empty - redierct user to login screen 

      httpHeaders = httpHeaders.set('Authorization' , '');
    }
    
    return this.httpClient.get<IProduct> (productUrl, { headers : httpHeaders}).pipe(catchError(this.handleError)); //return observable
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getCategories() : Observable<ICategory>{
    const categoryUrl = 'http://localhost:3000/categories';

    return this.httpClient.get<ICategory> (categoryUrl); //return observable
  }

  createProduct(product: IProduct) : Observable<IProduct> {
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.post<IProduct> (productUrl, product); //return observable
  }

  viewProduct(productId: string) : Observable<IProduct> {
    const productUrl = 'http://localhost:3000/products/' + productId;

    return this.httpClient.get<IProduct> (productUrl); //return observable
  }

  updateProduct(productId: string, product : IProduct) : Observable<IProduct> {
    const productUrl = 'http://localhost:3000/products/' + productId;

    return this.httpClient.put<IProduct> (productUrl, product); //return observable
  }

  deleteProduct(productId: string) : Observable<IProduct> {
    const productUrl = 'http://localhost:3000/products/' + productId;

    return this.httpClient.delete<IProduct> (productUrl); //return observable
  }

  searchCategoryProduct(categoryId: number) : Observable<IProduct> {
    const productUrl = 'http://localhost:3000/products?categoryId=' + categoryId;

    return this.httpClient.get<IProduct> (productUrl); //return observable
  }

  searchDateProduct(dateParams: any) : Observable<IProduct> {
    const productUrl = 'http://localhost:3000/products/date=' + dateParams;

    return this.httpClient.get<IProduct>(productUrl); //return observable
  }
}
