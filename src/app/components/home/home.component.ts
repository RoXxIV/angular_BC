import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from '../../model/advert';
import { AdvertHttpService } from '../../services/advert-http.service';
import { BrandHttpService } from '../../services/brand-http.service';
import { Brand } from '../../model/brand';
import { NgForm } from '@angular/forms';
import { Model } from '../../model/model';
import { ModelHttpService } from '../../services/model-http.service';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiplatformCollection } from '../../model/apiplatformCollection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  AdvertList: Observable<Advert[]>;
  brands: Observable<Brand[]>;
  models: Observable<Model[]>;
  currentPage = 1;
  pageSize = 8;
  totalItems: ApiplatformCollection;

  constructor(private advertHttpService: AdvertHttpService, private brandHttpService: BrandHttpService,
              private modelHttpService: ModelHttpService) { }
  // Gestion du select Marque
  selectedBrand(brand: any): any{

    this.advertHttpService.findAll().subscribe(
      m => this.AdvertList = m['hydra:member']
      .filter(p => p.model['brand']['name'] === brand),
      error => {
          console.log(error);
        }
    );
    // gestion des modeles en fonction de la marque choisis
    this.modelHttpService.findAll().subscribe
    (
      m => this.models = m['hydra:member']
      .filter(
      item => item.brand.name === brand),
      error => {
          console.log(error);
        }
    );
  }
  // Gestion du select Marque
  selectedModel(model: any): any{

    console.log('curent state is ' + model);

    this.advertHttpService.findAll().subscribe(
      m => this.AdvertList = m['hydra:member'].
      filter(p => p.model['name'] === model),
      error => {
          console.log(error);
        }
    );
  }

  // Gestion du select Marque
  selectedWidth(width: any): void{
    this.advertHttpService.findAll().subscribe
    (
      m => this.AdvertList = m['hydra:member'].
      filter(p => p.width === width),
      error => {
          console.log(error);
        }
    );
  }
  // suppression des filtres de recherche
  initAdverts(): void {
    return this.displayAdverts();
  }
  displayAdverts(): any{
  return this.advertHttpService.findAll().subscribe(
    m => this.AdvertList = m['hydra:member'],
    error => {
            console.log(error);
          });
  }
  displayBrands(): any{
  return this.brandHttpService.findAll().subscribe(
    m => this.brands = m['hydra:member'],
    error => {
          console.log(error);
        });
  }
  ngOnInit(): void {
    // recupere la liste d'article
    this.displayAdverts();
    // recupere la liste des marques
    this.displayBrands();
  }
}
