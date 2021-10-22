import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  str:string;
  num:number;
  today:Date;

  constructor() {
    this.str="Hello world! how are you";
    this.num=1024.678901;
    this.today=new Date();
  }

}
