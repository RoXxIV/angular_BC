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

  constructor(private token: TokenStorageService, private skateshopHttpService: SkateshopHttpService, private advertHttpService: AdvertHttpService) { }
  currentUser: User;
  skateshopList: Observable<Skateshop[]>;
  advertList: Observable<Advert[]>;
  logout(): void {
    this.token.signOut();
    window.location.reload();
  }



  ngOnInit(): void {
     this.currentUser = this.token.getUser();
     console.log(this.currentUser);
     this.skateshopHttpService.findAll().subscribe(m => this.skateshopList = m['hydra:member'].
      filter(s => s.professional['id'] === this.currentUser.id));
     console.log(this.currentUser.id)
     this.advertHttpService.findAll().subscribe(m => this.advertList = m['hydra:member'].
      filter(a => a.skateshop['professional']['id'] === this.currentUser.id));
  }

}
