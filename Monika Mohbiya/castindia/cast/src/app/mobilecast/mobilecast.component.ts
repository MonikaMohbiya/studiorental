import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-mobilecast',
  templateUrl: './mobilecast.component.html',
  styleUrls: ['./mobilecast.component.css']
})
export class MobilecastComponent implements OnInit {
  subscription1() {
    $('.pack-check1').css('display','inline-block');
    $('.pack-uncheck1').css('display','none');
    $('.pack-check2').css('display','none');
    $('.pack-check3').css('display','none');
    $('.pack-uncheck2').css('display','inline-block');
    $('.pack-uncheck3').css('display','inline-block');
  }
  subscription2() {
    $('.pack-check2').css('display','inline-block');
    $('.pack-uncheck2').css('display','none');
    $('.pack-check1').css('display','none');
    $('.pack-check3').css('display','none');
    $('.pack-uncheck1').css('display','inline-block');
    $('.pack-uncheck3').css('display','inline-block');
  }
  subscription3() {
    $('.pack-check3').css('display','inline-block');
    $('.pack-uncheck3').css('display','none');
    $('.pack-check1').css('display','none');
    $('.pack-check2').css('display','none');
    $('.pack-uncheck1').css('display','inline-block');
    $('.pack-uncheck2').css('display','inline-block');
  }

  constructor() { }
  ngOnInit(): void {
  }
 

}
