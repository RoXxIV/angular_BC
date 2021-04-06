import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/model/model';
import { ModelHttpService } from '../../../services/model-http.service';
import { BrandHttpService } from '../../../services/brand-http.service';
import { Brand } from '../../../model/brand';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {

  modelDetail: Model;
  constructor(private route: ActivatedRoute, private modelHttpService: ModelHttpService,
              private router: Router) { }

  deleteModel(): void{
    this.modelHttpService.deleteOne(this.modelDetail.id).subscribe(v => this.router.navigateByUrl('/models'));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.modelHttpService.findById(Number(id)).subscribe(model => this.modelDetail = model);
  }

}
