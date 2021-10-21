import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;
  logos:string[];
  currentLogoIndex:number;
  imgWidth:number;

  borderFlag:boolean;
  roundCornerFlag:boolean;
  centerFlag:boolean;

  constructor() {
    this.userName="SomeBody";
    this.logos=["assets/images/w1.jpg","assets/images/w2.jpg","assets/images/w3.jpg"];
    this.currentLogoIndex=0;
    this.imgWidth=400;
    this.borderFlag=true;
    this.centerFlag=true;
    this.roundCornerFlag=true;
  }

  changeUserName(){
    this.userName = prompt("Your Name Please ",this.userName)??this.userName;
  }

  toggleLogo(){
    this.currentLogoIndex++;
    if(this.logos.length<=this.currentLogoIndex)
      this.currentLogoIndex=0;
  }
}
