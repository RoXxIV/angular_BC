import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advert } from '../../../model/advert';
import { AdvertHttpService } from '../../../services/advert-http.service';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {

  advertDetail: Advert;
  constructor(private route: ActivatedRoute, private advertHttpService: AdvertHttpService, private router: Router) { }

  deleteAdvert(): void{
    this.advertHttpService.deleteOne(this.advertDetail.id).subscribe(
      v => this.router.navigateByUrl('/adverts'),
      error => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.advertHttpService.findById(Number(id)).subscribe(
      advert => this.advertDetail = advert,
      error => {
        console.log(error);
      });
  }

}
