import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApi: string;

  constructor(private httpClient: HttpClient) {
    this.userApi = environment.usersApi;
  }

  get currentUser() : User|null{
    let cu = sessionStorage.getItem("user");
    return cu==null?null:JSON.parse(cu);
  }

  login(emailId:string,password:string):Observable<User>{
   return this.httpClient.get<User[]>(`${this.userApi}?email=${emailId}`).pipe(
      map(users => {
        if(users==null || users.length===0)
          throw new Error("No such user found");
        
        let user = users[0];
        
        if(user.password!==password)
          throw new Error("Invalid Credits! Access Denied");

        sessionStorage.setItem("user",JSON.stringify({...user,password:undefined}));

        return user;
      })
    );
  }

  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.clear();
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userApi);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.userApi}/${id}`);
  }

  add(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userApi, user);
  }

  update(user: User) : Observable<User> {
    return this.httpClient.put<User>(`${this.userApi}/${user.id}`, user);
  }

  deleteById(id: number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.userApi}/${id}`);
  }
}
