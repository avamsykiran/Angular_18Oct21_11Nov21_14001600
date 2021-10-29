import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent implements OnInit,OnChanges {

  @Input()
  msg:string;

  now:string;

  constructor() {
    console.log("Constructor got called");
    this.msg="This is a default message";
    this.now=(new Date()).toISOString();
  }

  ngOnChanges(): void {
    console.log("ngOnChanges got called");
    this.now=(new Date()).toISOString();
  }
  
  ngOnInit(): void {
    console.log("ngOnInit got called");
  }

}
