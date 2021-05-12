import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../../../model/model';
import { ModelHttpService } from '../../../services/model-http.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {

  modelList: Observable<Model[]>;
  // collapse from ng-bootstrap
  public isCollapsed = true;

  constructor(private modelHttpService: ModelHttpService) { }
  // Get all models
  ngOnInit(): void {
    this.modelHttpService.findAll().subscribe(
      m => this.modelList = m['hydra:member'],
      error => {
          console.log(error);
        });
  }

}
