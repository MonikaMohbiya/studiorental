import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopupserviceService } from '../popupservice.service';
import * as $ from 'jquery';


//import { ImageCropperModule } from 'ngx-image-cropper';
@Component({
  selector: 'app-studiopage12',
  templateUrl: './studiopage12.component.html',
  styleUrls: ['./studiopage12.component.css']
})
export class Studiopage12Component implements OnInit {
  formtime:any=[];
  remainingText: number = 0;
  remainingText1: number = 0;
  mydata: string = '';
  Addform: FormGroup;
  firstdate: any;
  getcount:any='1';
  timingname:any=[];
  price:any=5000;
  getALLProjectType:any=[];
  studiospacecreateproject:any=[];
  constructor(private fb: FormBuilder, private commonservice:PopupserviceService) 
  {
    this.Addform = this.fb.group({
      ProjectName: [''],
      ProjectDescription: [''],
      ProjectStartDate: [''],
      ProjectEndDate: [''],
      Project_Type: [''],
      SelectStartTime: [''],
      SelectEndTime: [''],
      IamFlexiablewithDate_Time: [''],
      Studio_SpaceName: [''],
      Studio_Spacelocation: [''],
      No_of_shift_required: ['1'],
      not_to_the_owner_input: ['']
    })
    
  }
  
  ngOnInit(): void {
    $(document).mouseup(function (e) {
      if ($(e.target).closest(".dropdown-menu").length
        === 0) {
        $('.dropdown-menu').hide();
      }
    });
    let formtime = '{"TIMING_NAME":"' + " " + '"}';

    this.commonservice.getStudioFormTime(formtime).subscribe((resp:any)=>{
      console.log(resp.response_message.result);
      this.timingname=resp.response_message.result;
    });
    let createproject = '{"PROJECT_TYPE":"' + "a" + '"}';
    this.commonservice.getallprojecttype(createproject).subscribe((response:any)=> {
      this.studiospacecreateproject = response.response_message.result;
      console.log(response.response_message.result);
    })

   
   
  }

  getdate(getdate: any) {
    console.log(getdate);

  }
  getdatetwo(getdate: any) {
    console.log(getdate);
  }
  getdatetwo1(getdate: any) {
    console.log(getdate);
  }
  datePickerConfig = {
    format: 'DD/MM/YYYY',
    disableKeypress: true,
    // max: this.GetCurentDate(),
  };
  datePickerConfigtwo = {
    format: 'DD/MM/YYYY',
    disableKeypress: true,
    // max: this.GetCurentDate(),
  };
  AddFormSubmit() {
    console.log(this.Addform.value)
  }
  selecttimeone(value: any) {
    this.firstdate = value;
    this.Addform.get('SelectStartTime')?.setValue(value);
    $('.openone').hide();
  }
  selecttimeone1(value: any) {
    this.firstdate = value;
    this.Addform.get('ProjectName')?.setValue(value);
    $('.openone1').hide();
  }
  selecttimetwo(value: any) {
    this.firstdate = value;
    this.Addform.get('SelectEndTime')?.setValue(value);
    $('.opentwo').hide();
  }
  resetaddform() {
    this.Addform.reset();
    this.remainingText1=0;
    this.remainingText=0;
    $('input[name=No_of_shift_required]').val('1');
  
  }
  
  mychange(val: any) {
    this.remainingText = 0 + val.target.value.length;
    console.log(this.remainingText);
    this.remainingText1 = 0 + val.target.value.length;
    console.log(this.remainingText1);
  }

  opendrop() {
    $('.openone').show();
  }
  opendroptwo() {
    $('.opentwo').show();
  }
  opendrop1() {
    $('.openone1').show();
  }
  add() {
    var input = $('#noOfRoom'),
      value: any = input.val();
    input.val(++value);
    var amount=5000;
    this.price=amount*value;
    console.log(value,this.price);
    if (value > 1) {
      $('#subs').removeAttr('disabled');
    }
  }
  remove() {
    var input = $('#noOfRoom'),
      value: any = input.val();
      var amount=5000;
    if (value > 1) {
      input.val(--value);
      this.price=amount*value;
    console.log(value,this.price);
    } else {
      $('#subs').attr('disabled', 'disabled');
    }
  }

  changetypeone() {
    $("input[name=ProjectStartDate]").prop('type', 'date');
    $("input[name=ProjectStartDate]").click();
  }
  isNumeric(event: any) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  

}
