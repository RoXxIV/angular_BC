import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skateshop } from '../../../model/skateshop';
import { SkateshopHttpService } from '../../../services/skateshop-http.service';

@Component({
  selector: 'app-skateshop-list',
  templateUrl: './skateshop-list.component.html',
  styleUrls: ['./skateshop-list.component.scss']
})
export class SkateshopListComponent implements OnInit {

  skateshopList: Observable<Skateshop[]>;

  constructor(private skateshopHttpService: SkateshopHttpService) { }

  ngOnInit(): void {
    this.skateshopHttpService.findAll().subscribe(
      m => this.skateshopList = m['hydra:member'],
      error => {
          console.log(error);
        });
  }

}
