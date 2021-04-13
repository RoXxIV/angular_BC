import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/model/model';
import { ModelHttpService } from '../../../services/model-http.service';
import { BrandHttpService } from '../../../services/brand-http.service';
import { Brand } from '../../../model/brand';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {

 // modelDetail: Model;

 currentModel: Model = {
    id: 0,
    name: '',
    brand: null
  };

  brands: Observable<Brand[]>;

  constructor(private route: ActivatedRoute, private modelHttpService: ModelHttpService,
              private router: Router, private brandHttpService: BrandHttpService) { }

  /*deleteModel(): void{
    this.modelHttpService.deleteOne(this.modelDetail.id).subscribe(v => this.router.navigateByUrl('/models'));
  }*/

  getModelDetails(id: number): void {
    this.modelHttpService.findById(id)
      .subscribe(
        data => {
          this.currentModel = data;
          console.log(data);
          console.log(this.currentModel);
        },
        error => {
          console.log(error);
        });
  }

  updateModel(): void {
    this.modelHttpService.update(this.currentModel.id, this.currentModel)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/models']);
        },
        error => {
          console.log(error);
        });
  }

  deleteModel(): void {
    this.modelHttpService.deleteOne(this.currentModel.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/models']);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    /*const id = this.route.snapshot.paramMap.get('id');
    this.modelHttpService.findById(Number(id)).subscribe(model => this.modelDetail = model);
    */
   this.getModelDetails(this.route.snapshot.params.id);
   this.brandHttpService.findAll().subscribe(m => this.brands = m['hydra:member']);
  }

}
