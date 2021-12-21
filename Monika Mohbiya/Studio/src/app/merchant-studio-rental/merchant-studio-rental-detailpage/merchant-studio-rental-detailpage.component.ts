import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-studio-rental-detailpage',
  templateUrl: './merchant-studio-rental-detailpage.component.html',
  styleUrls: ['./merchant-studio-rental-detailpage.component.css']
})
export class MerchantStudioRentalDetailpageComponent implements OnInit {

  images: any = [];
  detailForm: FormGroup | any = null;
  submitbutton: boolean = false;
  iama: any;
  projecttype: any;
  type: any;
  userid: any;
  tt:any;
  profilename:any;
  project_type:any='';

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private commonService: CommonService, private formBuilder: FormBuilder, private router: Router) {
    $(document).mouseup(function (e) {
      if ($(e.target).closest(".dropping-list").length
        === 0) {
        $('.dropping-list').hide();

      }
    });
   }

  ngOnInit(): void {
    this.commonService.sessionCheckNull();
    this.type = sessionStorage.getItem('PROFILE_ID');
    this.userid = sessionStorage.getItem('USER_ID');
    this.profilename = sessionStorage.getItem('NAME');
     
    console.log(this.type );
    this.commonService.getDesignation().subscribe(response => {
      this.iama = response.response_message.getAllProfile;
    })

    this.commonService.getProjectType().subscribe(response => {
      this.projecttype = response.response_message.getAllProject;
    })

    this.detailForm = this.formBuilder.group({
      USER_ID: this.userid,
      PROFILE_ID: [this.type, Validators.required],
      PROJECT_TYPE: ['', Validators.required],
      EXPERTISE: ['', Validators.required],
      WORK_LOCATION: ['', Validators.required],
      ABOUT_ME: ['', Validators.required],
      IMAGES: ['', Validators.required],
      PAY_PER_SIFT: ['', Validators.required],
      CLIENT: ['', Validators.required],
      EXPERIENCE: ['', Validators.required],
    });
  }

  detailvalidation() {
    console.log(this.detailForm.value);
   
    if ((this.detailForm.value.USER_ID =='')||(this.detailForm.value.PROFILE_ID=='')||(this.detailForm.value.EXPERTISE=='')||(this.detailForm.value.WORK_LOCATION=='')||(this.detailForm.value.EXPERIENCE=='')||(this.detailForm.value.IMAGES=='')||(this.detailForm.value.ABOUT_ME=='')||(this.detailForm.value.WORK_LOCATION=='')||(this.detailForm.value.PAY_PER_SIFT=='')||(this.project_type=='')) {
      this.submitbutton = false;
    } else {
      this.submitbutton = true;
    }
  }

  urls = new Array<string>();

  uploadFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          if (file.type.indexOf("image") > -1) {
            this.images.push({
              url: event.target.result,
              type: 'img'
            });
          } else if (file.type.indexOf("video") > -1) {
            this.images.push({
              url: event.target.result,
              type: 'video'
            });
          }
          this.detailForm.patchValue({
            IMAGES: this.images
          });
          this.detailvalidation();
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    
  }
  removeSelectedFile(i: any) {
    this.images.splice(i, 1);
    this.detailvalidation();
  }

  detail() {
    $('.loader').show();
    let imgs = "";
    let i=0;
    for (let imgss of this.images) {
      imgs += imgss.type+','+imgss.url + ' @@@@ ';
      i++;
    }
    
    this.detailForm.value.IMAGES = imgs.replace(/ @@@@ \s*$/, "");
    this.detailForm.value.PROJECT_TYPE = this.project_type;   
    this.commonService.postDetail(this.detailForm.value).subscribe(response => {
      if (response.response_message != '') {
        this.router.navigateByUrl("/dashboard");
        sessionStorage.setItem('USER_ID', this.detailForm.value.USER_ID);
        $('.loader').hide();
      }
    })
  }


  selectprofiles(id:any,name:any){
    sessionStorage.setItem('PROFILE_ID',id);
    this.detailForm.value.PROFILE_ID=id;
    this.type=id;
    $('#floatingprofileid').val(name);
    $('.dropping-list').hide();
    this.detailvalidation();
  }
  selectprojecttype(id:any,name:any){
    this.project_type=id;
    this.detailForm.value.PROFILE_ID=id;
    $('#floatprojecttype').val(name);
    $('.dropping-list').hide();
  }

  opendropdown(droptwo:any){
    $('.'+droptwo).show();
  }


}
