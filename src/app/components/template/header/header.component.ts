import { Observable } from 'rxjs';
import { UserService } from './../../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';


@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  
  constructor(userService: UserService) {
      this.user$ = userService.getUser();
  }
  
  ngOnInit(): void {
  }
}
