import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { FirstserviceService } from '../firstservice.service';


@Component({
  selector: 'app-mfpost',
  templateUrl: './mfpost.component.html',
  styleUrls: ['./mfpost.component.css']
})
export class MfpostComponent  {
  title = 'cast';
  products:any=[];
  // FirstserviceService:any=[];
  constructor(private firstservice:FirstserviceService)
  {
    firstservice.products().subscribe((data:any)=>{
      console.warn("data",data)
      this.products=data;

    });
      // this.FirstserviceService=data.response_message.result;
      // console.warn(this.products);
    
  }
  // post
 getUserFormData(data:any){
  this.firstservice.saveproducts(data).subscribe((result:any)=>{
    console.warn(result)
  })
 }
}

  