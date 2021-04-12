import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advert } from '../../model/advert';
import { AdvertHttpService } from '../../services/advert-http.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  articleDetail: Advert;

  constructor(private route: ActivatedRoute, private advertHttpService: AdvertHttpService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.advertHttpService.findById(Number(id)).subscribe(advert => this.articleDetail = advert);

  }

}
