import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';
import { AdvertHttpService } from '../services/advert-http.service';
import { BrandHttpService } from '../services/brand-http.service';
import { Brand } from '../model/brand';
import { NgForm } from '@angular/forms';
import { Model } from '../model/model';
import { ModelHttpService } from '../services/model-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private advertHttpService: AdvertHttpService, private brandHttpService: BrandHttpService,
              private modelHttpService: ModelHttpService) { }

  recentAdvert: Observable<Advert[]>;
  brands: Observable<Brand[]>;
  models: Observable<Model[]>;

  // Gestion du select Marque
  selectedBrand(brand: any): any{

      console.log('curent state is ' + brand);

      this.advertHttpService.findAll().subscribe
        (
          m => this.recentAdvert = m['hydra:member']
          .filter(p => p.model['brand']['name'] === brand)
        );
        // gestion des modeles
      this.modelHttpService.findAll().subscribe
        (
          m => this.models = m['hydra:member']
          .filter(
            item => item.brand.name === brand
          )
        );
      }
      selectedModel(model: any): void{

        console.log('curent state is ' + model);

        this.advertHttpService.findAll().subscribe
          (
            m => this.recentAdvert = m['hydra:member'].
            filter(p => p.model['name'] === model)
          );
      }

       showAll(): void{
       this.advertHttpService.findAll().subscribe
       (
         m => this.recentAdvert = m['hydra:member']
       );
     }

      ngOnInit(): void {
        this.advertHttpService.findAll().subscribe(m => this.recentAdvert = m['hydra:member']);
        this.brandHttpService.findAll().subscribe(m => this.brands = m['hydra:member']);
      }

}
