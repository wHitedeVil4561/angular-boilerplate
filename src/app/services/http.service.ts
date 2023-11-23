import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  post(path: string, payload: any, queryparams: any = {}): Observable<any> {
    let params = new HttpParams();
    params = params.appendAll(queryparams);
    return this.http.post(path, payload, { params }).pipe(
      catchError((err: any, caught: Observable<any>): ObservableInput<any> => {
        return new Observable((observer) => {
          console.log(err);
          observer.next(err.error);
        });
      })
    );
  }
  get(path: string, params: any): Observable<any> {
    let queryparams = new HttpParams();
    queryparams = queryparams.appendAll(params);
    return this.http.get(path, { params: queryparams });
  }
  retreiveAddressDetails(mapboxId: any, queryparams?: any): Observable<any> {
    let params = new HttpParams();
    params = params.appendAll(queryparams);
    return this.http.get(`${environment.mapbox.retrieveURL}${mapboxId}`, {
      params,
    });
    // .pipe(
    //   map((res: any) => {
    //     console.log(res);
    //     return 'hello from api';
    //   })
    // );
  }
}
