import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';
import {Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url = "http://qaci.castindia.in/API/Studiorental/Studiorental"
  bodylogin: any;
  bodyregister: any;
  bodydetails: any;
  bodyuserid: any;

  constructor(private http: HttpClient, private Routers:Router,private sanitized: DomSanitizer) { }

  loginf(body: any): Observable<any>
  {
    this.bodylogin = JSON.stringify(body);
    return this.http.post<any>(this.url + "/loginStudiorental", this.bodylogin)
  }

  alertmessage(message: any, alertclass: any) {
    return this.sanitized.bypassSecurityTrustHtml('<div class="alert ' + alertclass + '">' + message + '<a class="close" style="text-decoration:none; color:#1A1A1A;" data-bs-dismiss="alert" aria-label="Close"><span style="padding-left:30px; font-size:18px; cursor: pointer;" aria-hidden="true">&times;</span></a></div>');
  }
  registration(body: any): Observable<any>
  {
    this.bodyregister = JSON.stringify(body);
    return this.http.post<any>(this.url + "/registrationStudiorental", this.bodyregister)
  }

  getDesignation(): Observable<any>{
    return this.http.get<any>(this.url + "/getAllProfile")
  }

  getProjectType(): Observable<any>{
    return this.http.get<any>(this.url + "/getAllProject")
  }

  postDetail(body: any): Observable<any>{
    this.bodydetails = JSON.stringify(body);
    return this.http.post<any>(this.url + "/insertUpdateStudiorental", this.bodydetails)
  }

  getvalidDetail(body: any){
    this.bodyuserid = body;
    return this.http.post<any>(this.url + "/getValidateRental", this.bodyuserid)
  }

  sessionCheckNull(){
    if((sessionStorage.getItem('mobilenumber')==null)||(sessionStorage.getItem('type')==null)){
      this.Routers.navigateByUrl('/login');
    }
  }
  sessionCheckNotNull(){
    if((sessionStorage.getItem('mobilenumber')!=null)&&(sessionStorage.getItem('type')!=null)){
      this.Routers.navigateByUrl('/dashboard');
    }
  }

  sessionCheckRegister(){
    if((sessionStorage.getItem('mobilenumber')==null)||(sessionStorage.getItem('type')!=null)){
      this.Routers.navigateByUrl('/login');
    }
    
  }
  validateEmail(email:any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// getotp(data: any): Observable<any> {
//   return this.http.post<any>(this.url +'/loginStudiorental', data);
// }

checkemail(data: any): Observable<any>{
  this.bodyuserid = data;
    return this.http.post<any>(this.url + "/checkemail", this.bodyuserid)
}


}
