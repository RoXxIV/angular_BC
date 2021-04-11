import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { UserHttpService } from '../../../services/user-http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetail: User;

  constructor(private route: ActivatedRoute, private userHttpService: UserHttpService, private router: Router) { }

  deleteModel(): void{
    this.userHttpService.deleteOne(this.userDetail.id).subscribe(v => this.router.navigateByUrl('/users'));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userHttpService.findById(Number(id)).subscribe(model => this.userDetail = model);
  }
}
