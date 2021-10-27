import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:User[];

  constructor() {
    this.users=[
      {id:1,fullName:'Vamsy Kiran',role:'USER',email:'vamsy@gmail.com',password:'password'},
      {id:2,fullName:'Suseela',role:'USER',email:'suseela@gmail.com',password:'password'},
      {id:3,fullName:'Indhikaa',role:'USER',email:'indhikaa@gmail.com',password:'password'}
    ];
  }

  getNextId():number{
    return !this.users || this.users.length===0?1:(this.users.map(u=>u.id).reduce((id1,id2)=>Math.max(id1,id2))+1);
  }

  getAll():User[]{
    return this.users;
  }

  getById(id:number):User|undefined{
    return this.users.find(u => u.id===id);
  }

  add(user:User){
    if(user){
      user.id=this.getNextId();
      this.users.push(user);
    }
  }

  update(user:User){
    let index = this.users.findIndex(u=> u.id===user.id);
    
    if(index===-1)
      throw new Error("No Such User Found");
    
    this.users[index]=user;
  }  

  deleteById(id:number){
    let index = this.users.findIndex(u=> u.id===id);
    
    if(index===-1)
      throw new Error("No Such User Found");
    
    this.users.splice(index,1);
  } 
}
