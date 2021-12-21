import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatopen:string='';

  constructor() { }

  ngOnInit(): void {
  }

  ChangeSpeaker(event:any) {
    // $('.bsenderbox').css('display','inline-block');
    // $('.bspeabox').css('display','none');
    if(event.target.value!=''){
      $('.sender').show();
      $('.speaker').hide();
       }
    else{
      $('.sender').hide();
      $('.speaker').show();
    }
     {
   
      $('#chat__form').on('submit', function(e) {
        e.preventDefault();
        var message = $('#text-message').val();
        $('#text-message').val('');
        $('.chat__wrapper').append('<div class="chat__message chat__message-own"><div>' + message + '</div></div>')
       
      })
    }
  }
  rowchat(chat:any){
    
if(chat=='chat1'){
  this. chatopen='chat1';
}else  if(chat=='chat2'){
   this. chatopen='chat2';
    }else if(chat=='chat3'){
      this. chatopen='chat3';
    }
    else if(chat=='chat4'){
      this. chatopen='chat4';
    }
    else if(chat=='chat5'){
      this. chatopen='chat5';
    }
    else if(chat=='chat6'){
      this. chatopen='chat6';
    }
    else if(chat=='chat7'){
      this. chatopen='chat7';
    }
    else if(chat=='chat8'){
      this. chatopen='chat8';
    }
    else if(chat=='chat9'){
      this. chatopen='chat9';
    }

    else if(chat=='chat10'){
      this. chatopen='chat10';
    }
    else if(chat=='chat11'){
      this. chatopen='chat11';
    }
    else if(chat=='chat12'){
      this. chatopen='chat12';
    }
  }
  attachon(){
    $('#file').click();
  }
  
  
}
