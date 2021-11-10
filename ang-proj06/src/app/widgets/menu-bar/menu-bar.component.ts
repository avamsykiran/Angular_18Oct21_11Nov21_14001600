import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
 
  @Input()
  banner:string;

  @Input()
  links?:string[][];

  @Input()
  showLogout:boolean;

  @Output()
  logoutClicked:EventEmitter<void>;

  constructor() {
    this.banner="APP";
    this.showLogout=true;
    this.logoutClicked=new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  logoutBtnClicked(){
    this.logoutClicked.emit();
  }
}
