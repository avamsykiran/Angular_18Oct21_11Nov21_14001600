import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent  {

  loanAmount:number;
  roi:number;
  term:number;

  constructor() {
    this.loanAmount=450000;
    this.roi=2;
    this.term=12;
  }

}
