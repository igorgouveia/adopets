import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  constructor(private cookie:CookieService, private router:Router) { }
  exit(){
    this.cookie.deleteAll();
    this.router.navigate([`/welcome`]);
  }
}
