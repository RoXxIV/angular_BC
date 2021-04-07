import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from 'src/app/model/advert';
import { AdvertHttpService } from '../../../services/advert-http.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {

  advertList: Observable<Advert[]>;

  constructor(private advertHttpService: AdvertHttpService) { }

  ngOnInit(): void {
    this.advertHttpService.findAll().subscribe(m => this.advertList = m['hydra:member']);
  }

}
