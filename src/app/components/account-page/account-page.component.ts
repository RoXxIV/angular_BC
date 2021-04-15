import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  constructor(private token: TokenStorageService) { }
  currentUser: User;
  logout(): void {
    this.token.signOut();
    window.location.reload();
  }



  ngOnInit(): void {
     this.currentUser = this.token.getUser();
     console.log(this.currentUser);
  }

}
