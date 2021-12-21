import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PopupserviceService {
url="http://qaci.castindia.in/API/Studiorental/Studiorental/"
  constructor(private http:HttpClient) { }

  getStudioFormTime(formtime:any): Observable<any>
  {
    return this.http.post<any>(this.url + "getStudioFormTime",formtime)
  }
  savegetStudioFormTime(data:any)
  {
    return this.http.post(this.url,data);
  }
  getALLProjectType(): Observable<any>
  {
    return this.http.get<any>(this.url + "getALLProjectType")
  }
  savegetALLProjectType(data:any)
  {
    return this.http.post(this.url,data);
  }
  getallprojecttype(createproject:any) :Observable<any>
  {
    return this.http.post<any>(this.url + "/getAllProjectType", createproject);
  }
}
