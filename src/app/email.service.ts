import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  createEmail(
    pengirim: string, 
    penerima: string, 
    messages: string, 
    subject:string
    ): Observable<any> {
    let body = new HttpParams();
    body = body.set('pengirim', pengirim);
    body = body.set('penerima', penerima);
    body = body.set('subject', subject);
    body = body.set('isi', messages);
    return this.http.post("https://ubaya.fun/hybrid/160419022/UAS/create_email.php", body);
  }

  emailList(
    idpenerima: string, 
    fav_spam: string
    ): Observable<any> {
    let body2 = new HttpParams();
    body2 = body2.set('email_penerima',idpenerima);
    body2 = body2.set('fav_spam',fav_spam);
    return this.http.post("https://ubaya.fun/hybrid/160419022/UAS/get_email.php",body2);
  }

  deleteEmail(id: number, email:string): Observable<any> {
    let body3 = new HttpParams();
    body3 = body3.set('idemail',id);
    body3 = body3.set('iduser',email);
    return this.http.post("https://ubaya.fun/hybrid/160419022/UAS/delete_email.php", body3);
  }

  updateEmail(
    fav_spam: string, 
    id: number, 
    iduser: string
    ): Observable<any> {
    let body4 = new HttpParams();
    body4 = body4.set('fav_spam',fav_spam);
    body4 = body4.set('idemail',id);
    body4 = body4.set('iduser',iduser);
    return this.http.post("https://ubaya.fun/hybrid/160419022/UAS/update_email.php", body4);
  }

  detailEmail(
    user_email: string,
    idemail: number
  ): Observable<any> {
    let body5 = new HttpParams();
    body5 = body5.set('email_user', user_email);
    body5 = body5.set('idemail', idemail);
    return this.http.post("https://ubaya.fun/hybrid/160419022/UAS/get_detail_email.php", body5);
  }

  sentEmailList(
    user_email: string,
  ): Observable<any> {
    let body6 = new HttpParams();
    body6 = body6.set('idemail', user_email);
    return this.http.post("https://ubaya.fun/hybrid/160419022/UAS/get_sent_email.php", body6);
  }

  productList(): Observable<any> {
    return this.http.get('https://ubaya.fun/hybrid/160419022/products.php');
  }
  constructor(private http: HttpClient) { }
}
