import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skateshop } from '../../../model/skateshop';
import { SkateshopHttpService } from '../../../services/skateshop-http.service';

@Component({
  selector: 'app-skateshop-details',
  templateUrl: './skateshop-details.component.html',
  styleUrls: ['./skateshop-details.component.scss']
})
export class SkateshopDetailsComponent implements OnInit {

  skateshopDetails: Skateshop;
  constructor(private route: ActivatedRoute, private skateshopHttpService: SkateshopHttpService, private router: Router) { }

  deleteSkateshop(): void{
    this.skateshopHttpService.deleteOne(this.skateshopDetails.id).subscribe(v => this.router.navigateByUrl('/skateshops'));
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.skateshopHttpService.findById(Number(id)).subscribe(skateshop => this.skateshopDetails = skateshop);
  }

}
