import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';
import { AdvertHttpService } from '../services/advert-http.service';
import { BrandHttpService } from '../services/brand-http.service';
import { Brand } from '../model/brand';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private advertHttpService: AdvertHttpService, private brandHttpService: BrandHttpService) { }

  recentAdvert: Observable<Advert[]>;
   brands: Observable<Brand[]>;

      selectedBrand(brand: any): void{
        console.log('curent state is ' + brand);
        this.advertHttpService.findAll().subscribe(m => this.recentAdvert =
      // tslint:disable-next-line:no-string-literal
      m['hydra:member'].filter(p => p.model['brand']['name'] === brand));
      }

     showAll(): void{
       this.advertHttpService.findAll().subscribe(m => this.recentAdvert = m['hydra:member']);
     }

  ngOnInit(): void {

    this.advertHttpService.findAll().subscribe(m => this.recentAdvert = m['hydra:member']);
    this.brandHttpService.findAll().subscribe(m => this.brands = m['hydra:member']);

  }

}
