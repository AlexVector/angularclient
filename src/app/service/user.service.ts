import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    user.status = "Пользователь";
    return this.http.post<User>(this.usersUrl, user);
  }

  public valid(user: User): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}?name=${user.name}`);
  }

}
