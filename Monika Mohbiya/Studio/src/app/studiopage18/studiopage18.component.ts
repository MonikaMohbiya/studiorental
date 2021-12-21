import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-studiopage18',
  templateUrl: './studiopage18.component.html',
  styleUrls: ['./studiopage18.component.css'],
  
})
export class Studiopage18Component implements OnInit {
  remainingText:number=0;
  mydata: string = '';

  constructor() { }

  ngOnInit(): void {
  }

    mychange(val:any) {
      this.remainingText = 0 + val.target.value.length;
      console.log(this.remainingText);
   }
   
  // aa(){
  //     $('textarea','input' ).countChars();
  // }

}
