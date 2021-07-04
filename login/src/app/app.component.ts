import { IndexComponent } from './view/index/index.component';
import { Component } from '@angular/core';
// import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public router: Router,
    // public activatedRoute: ActivatedRoute
  ) { }

  title = 'app';

}
