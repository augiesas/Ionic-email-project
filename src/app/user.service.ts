import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  CreateUser(
    email: string,
    username: string,
    password: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('email', email);
    body = body.set('username', username);
    body = body.set('password', password);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419022/UAS/new_user.php',
      body
    );
  }

  UpdateUser(
    email: string,
    username: string
  ): Observable<any> {
    let body2 = new HttpParams();
    body2 = body2.set('email', email);
    body2 = body2.set('username', username);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419022/UAS/update_user.php',
      body2
    );
  }

  DeleteUser(
    email: string
  ): Observable<any> {
    let body4 = new HttpParams();
    body4 = body4.set('email', email);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419022/UAS/delete_user.php',
      body4
    );
  }

  checklogin(userid:string, pass:string):Observable<any>{
    let body5 = new HttpParams();
    body5 = body5.set('user_id', userid);
    body5 = body5.set('password', pass);
    return this.http.post (
      "https://ubaya.fun/hybrid/160419022/UAS/checklogin.php", 
      body5
      );
  }

  changePassword(email:string, oldpass:string, newpass:string):Observable<any>{
    let body6 = new HttpParams();
    body6 = body6.set('email', email);
    body6 = body6.set('pass_old', oldpass);
    body6 = body6.set('pass_new', newpass);
    return this.http.post (
      "https://ubaya.fun/hybrid/160419022/UAS/change_password.php", 
      body6
      );
  }
}


