import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  status = 0;
  constructor(private api: ApiService , private cookie:CookieService) { }
  ngOnInit() {
    if(this.cookie.get('authKey')){
      this.status = 1;
    }
  }

  request(){
    this.api.sessionRequest().then((data:any) => {
      this.cookie.set('authKey',data.data.access_key);
      this.status = 1;
     })
  }

}
