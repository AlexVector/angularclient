import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Postmessage} from "../model/postmessage";

@Injectable()
export class PostmessageService {
  private postsUrl: string;

    constructor(private http: HttpClient) {
      this.postsUrl = 'http://localhost:8090/main';
    }

    public findAll(): Observable<Postmessage[]> {
      return this.http.get<Postmessage[]>(this.postsUrl);
    }
    /*
    public save(pms: Postmessage) {
      //user.status = "Пользователь";
      return this.http.post<Postmessage>(this.postsUrl, pms);
    }
    */
}
