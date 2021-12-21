import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { LoginViewModel } from 'src/app/login-view-model';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-merchant-studio-rental-registerpage',
  templateUrl: './merchant-studio-rental-registerpage.component.html',
  styleUrls: ['./merchant-studio-rental-registerpage.component.css']
})
export class MerchantStudioRentalRegisterpageComponent implements OnInit {

  loginViewModel: LoginViewModel = new LoginViewModel();
  submitbutton:boolean = false;
  iama: any;
  registerFrom: FormGroup | any = null;
  mobile: any;
  otpp: any;
  types= ["Still", "Motion"];
  message:any;
  firstname:any='';
  lastname:any='';
  email:any='';
  socialUser:any;
  tt:any='';

  loggedIn:boolean=false;

  constructor(private commonService: CommonService, private formBuilder: FormBuilder, private router:Router, private socialAuthService: SocialAuthService) { 
    this.commonService.sessionCheckRegister();
    this.mobile=sessionStorage.getItem('mobilenumber');
    this.otpp=sessionStorage.getItem('otp');
    $(document).mouseup(function (e) {
      if ($(e.target).closest(".dropping-list").length
        === 0) {
        $('.dropping-list').hide();

      }
    });
  }

  ngOnInit(): void {
//  this.message=this.commonService.alertmessage('Email already exsist','alert-danger');
  this.sociallogin();

    this.commonService.getDesignation().subscribe(response => {
      this.iama = response.response_message.getAllProfile;
    })

    this.registerFrom = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')],[this.validEmail()]],
      TYPE: ['', Validators.required],
      PROFILE_ID : ['', Validators.required],
      mobilenumber: sessionStorage.getItem('mobilenumber'),
    });
  }

  sociallogin(){
    this.socialAuthService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      this.socialUser = user;
      if (this.socialUser!= null) {
        // alert(socialUser.email)
        console.log(this.socialUser.email);
        this.commonService.checkemail('{"email":"'+this.socialUser.email+'"}').subscribe(response =>{
          if(response.response_message>0){
            this.message=this.commonService.alertmessage('Email already exist','alert-danger');
            this.registerFrom.reset();
            this.tt='';
            this.firstname='';
            this.lastname='';
            this.email='';
            this.submitbutton=false;
          }
          else{
            this.firstname=this.socialUser.firstName;
            this.lastname=this.socialUser.lastName;
            this.email=this.socialUser.email;
            this.registervalidation();
          }
        })
      }


    });
  }
  

  registervalidation(){
    if(this.firstname!=''){this.registerFrom.value.firstName=this.firstname;}
    if(this.lastname!=''){this.registerFrom.value.lastName=this.lastname;}
    if(this.email!=''){this.registerFrom.value.email=this.email;}
    if((this.registerFrom.value.firstName=='')||(this.registerFrom.value.lastName=='')||(this.commonService. validateEmail(this.registerFrom.value.email)!=true)||(this.registerFrom.value.TYPE=='')||(this.tt=='')||(this.registerFrom.value.mobilenumber=='')){
      this.submitbutton=false;
    }else{
      this.submitbutton=true;
    }
    }

    validEmail(): AsyncValidatorFn{
      return (control: AbstractControl): Observable<ValidationErrors | null> =>
    {
      
      var validateEmail = this.registerFrom.controls["email"].value;
      return  this.commonService.checkemail('{"email":"'+validateEmail+'"}').pipe(map((existingUser: any) =>
      {
        if (existingUser.response_message>0 )
        {
          
          this.email='';
          this.registerFrom.value.email='';
          this.registervalidation();
          $('#floatingemail').val('');
          this.submitbutton=false;
          return { uniqueEmail: { valid: false } }; //invalid

        }
        else
        {
          this.registervalidation();
          return null;
         
        }
      }));
    };
  }

  register(){
    $('.loader').show();
    this.registerFrom.value.PROFILE_ID=this.tt;
    this.commonService.registration(this.registerFrom.value).subscribe(response => {
      if(response.response_message!=''){
        sessionStorage.setItem('type', "register");
        sessionStorage.setItem('PROFILE_ID', this.registerFrom.value.PROFILE_ID);
        
        sessionStorage.setItem('USER_ID', response.response_message.user_id);
        this.router.navigateByUrl("/detail");
        $('.loader').hide();
      }
     
    })
  }



  SignWithGoogle(type: any): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }



  // facebookapicode
  SignInWithFB(type: any): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  aa(){
    this.registervalidation();
  }

  opendropdown(){
    $('.dropping-list').show();
  }
  selectprofiles(id:any,name:any){
    this.tt=id;
    $('#floatingprofileid').val(name);
    sessionStorage.setItem('NAME',name);
    $('.dropping-list').hide();
    this.registervalidation();
  }

}
