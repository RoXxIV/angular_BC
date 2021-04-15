import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/model/brand';
import { BrandHttpService } from '../../../services/brand-http.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brandList: Observable<Brand[]>;

  constructor(private brandHttpService: BrandHttpService) { }
  ngOnInit(): void {
    this.brandHttpService.findAll().subscribe(
      m => this.brandList = m['hydra:member'],
      error => {
        console.log(error);
      });
  }

}
