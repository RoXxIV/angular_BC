import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { UserHttpService } from '../../../services/user-http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Observable<User[]>;

  constructor(private userHttpService: UserHttpService) { }

  ngOnInit(): void {
    this.userHttpService.findAll().subscribe(
      u => this.userList = u['hydra:member'],
      error => {
          console.log(error);
        });
  }

}
