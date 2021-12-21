import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {
  url="http://localhost:3000/products";
  constructor(private http :HttpClient) { }
  products()
  {
    // return this.http.get(this.url+'getAgeRangeData');
    return this.http.get(this.url);
  }
  saveproducts(data:any)
  {
  return this.http.post(this.url,data);
}
}
