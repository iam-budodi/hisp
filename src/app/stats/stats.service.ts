import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IStats } from './stats';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private productUrl = 'api/products/products.json';

  // constructor(private http: HttpClient) {}

  // getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.productUrl).pipe(
  //     tap((data) => console.log('All ', JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(err: HttpErrorResponse) {
  //   // in a real world app, we may send the server to some remote logging infrastructure
  //   // instead of just logging it to the console

  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     // A client side or network error occurred, handle it accordingly
  //     errorMessage = `an error occured: ${err.error.message}`;
  //   } else {
  //     // the backend returned an unsuccessful response code.
  //     // the response body may contain clues as to what went wrong
  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }

  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }
}
