import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user.service";
import {Postmessage} from "../model/postmessage";
import {PostmessageService} from "../service/postmessage.service";


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  users!: User[];
  messages!: Postmessage[];

  //
  constructor(private userService: UserService, private postService: PostmessageService) { }

  ngOnInit() {

    this.userService.findAll().subscribe(data => {
      this.users = data;
    });

    this.postService.findAll().subscribe(data => {
      this.messages = data;
    });
  }
}
