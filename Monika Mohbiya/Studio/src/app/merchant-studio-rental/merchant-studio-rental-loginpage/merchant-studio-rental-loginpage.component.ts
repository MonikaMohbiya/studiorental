import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { LoginViewModel } from 'src/app/login-view-model';
import * as $ from 'jquery';

@Component({
  selector: 'app-merchant-studio-rental-loginpage',
  templateUrl: './merchant-studio-rental-loginpage.component.html',
  styleUrls: ['./merchant-studio-rental-loginpage.component.css']
})
export class MerchantStudioRentalLoginpageComponent implements OnInit {

  loginViewModel: LoginViewModel = new LoginViewModel();
  loginForm: FormGroup | any = null;
  public inputValue: any;
  public focused: string = '';
  validmobile: any = '';
  suvmitbutton:boolean = false;
  timerOntwo: boolean = true;
  $:any;
  otpone: any = '';
  otptwo: any = '';
  otpthree: any = '';
  otpfour: any = '';
  sotpone: any = '';
  sotptwo: any = '';
  sotpthree: any = '';
  sotpfour: any = '';
  realotp: any = '';
  userid: any;

  constructor(private commonService: CommonService, private router:Router, private formBuilder: FormBuilder) {
    //this.commonService.sessionCheckNotNull();
    if((sessionStorage.getItem('mobilenumber')!=null)&&(sessionStorage.getItem('type')!=null)){
      this.router.navigateByUrl('/dashboard');
    }else{
      sessionStorage.clear();
    }
   
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mobilenumber: [null, [Validators.required]],
      otpone:['',Validators.required],
      otptwo:['',Validators.required],
      otpthree:['',Validators.required],
      otpfour:['',Validators.required],
      // getotpone:[''],
      // getotptwo:[''],
      // getotpthree:[''],
      // getotpfour:[''],
      otp:[],
    });
  }

  otpSend(event: any) {
    this.timertwo(60, 'asp');
    $('.verifying').hide();
    $('.send').show();
    $('.send').prop('disabled', true);
    $('.settimer').show();
    $('.otp-input').show();
    $('input[name=mobilenumber]').attr('disabled', 'disabled');
    this.focused = 'focused';
    this.OtpFunction();
  }

  OtpFunction() {
    // $('.loader').show();
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    var digitss = ("" + OTP).split("");
    this.otpone = digitss[0];
    this.otptwo = digitss[1];
    this.otpthree = digitss[2];
    this.otpfour = digitss[3];
    const getotp=this.otpone+this.otptwo+this.otpthree+this.otpfour;
    const settype='';
    // this.commonService.getotp('{ "mobilenumber":"'+this.validmobile+'","otp":"'+getotp+'","type":"Aspirant"}').subscribe((response:any)=>{
    //   console.log(response);
    //   $('.loader').hide();
    // })
    alert(getotp);
    this.realotp = getotp;
  }

  keytab(event: any) {
    let element = event.srcElement.nextElementSibling; // get the sibling element
    if (element == null)  // check if its null
      return;
    else
      element.focus();   // focus if not null
  }

  getvalidmobile(usertype: any){
    $('.verifying').hide();
    this.validmobile = '';
    if (usertype == 'aa') { this.validmobile = $('input[formControlName=mobilenumber]').val();
    $('.checkmobile1').show();
    var value = this.validmobile.length;
    if(value===10){
      $('.verifying').show();
      $('.checkmobile1').hide();
      // var loginViewModel = this.loginForm.value.mobilenumber as LoginViewModel;
      // this.commonService.registration(loginViewModel).subscribe((response: any)=>{
      //   this.validmobile == response.response_message.mobile_no;
      //   console.log(response.response_message);
      // })
    }
  }
  }

  loginvalidation(){

    if((this.otpone==this.loginForm.value.otpone)&&(this.otpone!='')
    &&(this.otptwo==this.loginForm.value.otptwo)&&(this.otptwo!='')
    &&(this.otpthree==this.loginForm.value.otpthree)&&(this.otpthree!='')
    &&(this.otpfour==this.loginForm.value.otpfour)&&(this.otpfour!='')){
      $('.verifyied').show();
      $('.send').hide();
      $('.settimer').hide();
      $('.settimertwo').hide();
      $('.empotp input').prop('disabled', true);
      if(this.loginForm.valid==false){
        this.suvmitbutton=false;
      }else{
        this.suvmitbutton=true;
        // alert();
      }
      
    }
    
    // console.log(this.loginForm.valid);
    
  }


  login(){
    this.loginForm.value.otpone='';
    this.loginForm.value.otptwo='';
    this.loginForm.value.otpthree='';
    this.loginForm.value.otpfour='';
    // this.loginForm.value.otp=this.loginForm.value.otpone+this.loginForm.value.otptwo+this.loginForm.value.otpthree+this.loginForm.value.otpfour;
    // var loginViewModel = this.loginForm.value as LoginViewModel;
    this.commonService.loginf(this.loginForm.value).subscribe((
      response: any) => {
        if(response.response_message==''){
          sessionStorage.setItem('mobilenumber', this.loginForm.value.mobilenumber);
          this.router.navigateByUrl("/register");
        }
        else{
          sessionStorage.setItem('type', "loged");
          sessionStorage.setItem('mobilenumber', response.response_message.mobile_no);
          sessionStorage.setItem('USER_ID', response.response_message.user_id);
          this.userid=response.response_message.user_id;
          console.log(this.userid);
          this.commonService.getvalidDetail('{"USER_ID":"'+this.userid+'"}').subscribe(response => {
            console.log(response.status);
            if(response.status =="false"){
              this.router.navigateByUrl("/detail");
            }
            else{
              this.router.navigateByUrl("/dashboard");
            };
          })
        }

      })
  }


  timertwo(remaining: any, typusere: any) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    let ms = m < 10 ? '0' + m : m;
    let ss = s < 10 ? '0' + s : s;

    $('#timertwo').html('Resend OTP in: <b>' + ms + ':' + ss + '</b>');

    remaining -= 1;
    if (remaining >= 0 && this.timerOntwo) {
      setTimeout(() => {
        this.timertwo(remaining, typusere);
      }, 1000);
      return;
    }
    if (!this.timerOntwo) {
      return;
    }
    // Do timeout stuff here
    $(".resend").prop('disabled', false);
    $('.send').prop('disabled', false);
    $('.send').text('Resend');
    $('.resend').show();
    $('.settimer').hide();
  }

  timertwoo(remaining: any, typusere: any) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    let ms = m < 10 ? '0' + m : m;
    let ss = s < 10 ? '0' + s : s;
    $('.settimertwo').html('Resend OTP in: <b>' + ms + ':' + ss + '</b>');
    remaining -= 1;
    if (remaining >= 0 && this.timerOntwo) {
      setTimeout(() => {
        this.timertwoo(remaining, typusere);
      }, 1000);
      return;
    }
    if (!this.timerOntwo) {
      return;
    }
    // Do timeout stuff here

    $(".verifyingemp").prop('disabled', false);
    $('.verifyingemp').text('Resend');
    $('.settimertwo').hide();
  }

}
function setData(data: any) {
  throw new Error('Function not implemented.');
}

function data(data: any) {
  throw new Error('Function not implemented.');
}

