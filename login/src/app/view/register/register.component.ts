import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public router: Router,
    // public activatedRoute: ActivatedRoute
  ) { }
  addClick(event: any) {
    // {
    //   path: 'index/';
    //   component: IndexComponent
    // }
    // }
    this.router.navigate(['/index'],);

  }

  ngOnInit() {
  }

}
