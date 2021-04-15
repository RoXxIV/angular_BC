import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
