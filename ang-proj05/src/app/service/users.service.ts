import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userApi: string;

  constructor(private httpClient: HttpClient) {
    this.userApi = environment.usersApi;
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
