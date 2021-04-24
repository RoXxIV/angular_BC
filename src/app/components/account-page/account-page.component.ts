import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
import { Skateshop } from '../../model/skateshop';
import { SkateshopHttpService } from '../../services/skateshop-http.service';
import { Advert } from '../../model/advert';
import { AdvertHttpService } from '../../services/advert-http.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  currentUser: User;
  skateshopList: Observable<Skateshop[]>;
  advertList: Observable<Advert[]>;
  active = 1;

  constructor(private token: TokenStorageService, private skateshopHttpService: SkateshopHttpService,
              private advertHttpService: AdvertHttpService) { }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
  ngOnInit(): void {
     this.currentUser = this.token.getUser();

     this.skateshopHttpService.findAll().subscribe(
       m => this.skateshopList = m['hydra:member'].
      filter(s => s.professional['id'] === this.currentUser.id),
      error => {
          console.log(error);
        });

     this.advertHttpService.findAll().subscribe(
       m => this.advertList = m['hydra:member'].
      filter(a => a.skateshop['professional']['id'] === this.currentUser.id),
      error => {
          console.log(error);
        });
  }
}
