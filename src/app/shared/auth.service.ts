import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import{Item} from './item';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  public apiURL = 'https://devrunner.co.in/machine_test/index.php/web_api/Users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.apiURL + '/Users').pipe(
      catchError(this.errorHandler)
    )
  }

  post(post:Item){
    return this.httpClient.post<Item>(this.apiURL + '/Register', JSON.stringify(post), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
  login(Item: { user_email: string; user_pwd: string; }){
    return this.httpClient.get<any>(this.apiURL + `/login?user_email=` + Item.user_email + `&user_pwd=` + Item.user_pwd ).pipe(
      catchError(this.errorHandler)
    )
  }

  find(user_id:number)  {
    return this.httpClient.get<any>(this.apiURL + '/user_detail?' + 'user_id=' + user_id).pipe(
      catchError(this.errorHandler)
    )
  }

  update(Item: any) {
    return this.httpClient.get<Item>(this.apiURL + '/update_user').pipe(
      catchError(this.errorHandler)
    )
  }

  delete(user_id: number){
    return this.httpClient.get(this.apiURL + '/remove_user' + user_id).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: string; message: string; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
