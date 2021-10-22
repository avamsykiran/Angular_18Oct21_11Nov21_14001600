import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  friends:string[];
  inputtedFriend?:string;

  constructor() {
    this.friends=['Vamsy','Kiran','Indhikaa'];
  }

  remove(friend:string){
    let index = this.friends.findIndex(f => f===friend);
    this.friends.splice(index,1);
  }

  add(){
    if(this.inputtedFriend){
      this.friends.push(this.inputtedFriend);
      this.inputtedFriend=undefined;
    }
  }
}
