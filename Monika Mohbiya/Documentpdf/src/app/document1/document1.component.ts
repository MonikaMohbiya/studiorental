import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document1',
  templateUrl: './document1.component.html',
  styleUrls: ['./document1.component.css']
})
export class Document1Component implements OnInit {
  viewer = 'google';  
  selectedType = 'docx';   
  DemoDoc="http://www.africau.edu/images/default/sample.pdf"  
  DemoDoc1="https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt"  

  constructor() { }

  ngOnInit(): void {
  }

}
