import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  public user: any;
  constructor(
    public router: ActivatedRoute,
    public auth: AuthService,
    public routers: Router
  ) {}

  ngOnInit(): void {
    let user_id = this.router.snapshot.params['itemId'];
    this.auth.find(user_id).subscribe((data: any) => {
      this.user = data.data;
      console.log(data);
    });
  }

  onBack() {
    this.routers.navigate(['/dashboard']);
  }
}
