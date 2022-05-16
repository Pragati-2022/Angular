import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    console.log('request made to' + request.url);

    let httpAuth = request.headers.get('Authentication');
    httpAuth = 'addingValueFromInterceptor ' + httpAuth;
    console.log(httpAuth);
    
    const Req = request.clone({ headers: request.headers.set('Authorization', httpAuth) });
    
    return next.handle(Req)
    .pipe(
      //retry on failure
      retry(2),
      //handle errors
      catchError((error : HttpErrorResponse) => {
        alert('Http Error In : ' + request.url);
        return throwError(error);
      }),

      finalize(() => {
        const profilingMsg = request.method + `"${request.url}"`;
        console.log(profilingMsg);
      })
    )
  }
}
