import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';



@Component({
  selector: 'app-user-valid',
  templateUrl: './user-valid.component.html',
  styleUrls: ['./user-valid.component.css']
})
export class UserValidComponent {
  user: User;
  find: any;

  constructor( private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.valid(this.user).subscribe(data=> {
      this.find = data;
      console.log(data);
      if (data.find(x=>x.name==this.user.name && x.password==this.user.password)){
        console.log("ВАЛИДАЦИЯ ПРОШЛА");
        alert("Валидация прошла успешно");
      }else{
        console.log("ВАЛИДАЦИЯ НЕ ПРОШЛА");
        alert("Ошибка входа или пользователь не зарегистрирован!");
      }// + перенаправление на основную страницу
    });
  }

}
