import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-merchant-studio-rental-dashboard',
  templateUrl: './merchant-studio-rental-dashboard.component.html',
  styleUrls: ['./merchant-studio-rental-dashboard.component.css']
})
export class MerchantStudioRentalDashboardComponent implements OnInit {

  $:any;
  userid: any;

  constructor(private CommonServices:CommonService, private router:Router) {
    this.validate();
    this.CommonServices.sessionCheckNull();
  }

  ngOnInit(): void {
    
  }

  validate(){
    this.userid=sessionStorage.getItem('USER_ID');
          console.log(this.userid);
          this.CommonServices.getvalidDetail('{"USER_ID":"'+this.userid+'"}').subscribe(response => {
            console.log(response.status);
            if(response.status =="false"){
              this.router.navigateByUrl("/detail");
            }
            else{
              this.router.navigateByUrl("/dashboard");
            };
          })
  }



}
