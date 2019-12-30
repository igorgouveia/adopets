import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  email: string;
  password: string;
  status = null;
  constructor(private api: ApiService, private cookie:CookieService) { }

  ngOnInit() {
    if(!this.cookie.get('authKey')){
      this.status = 3;
    }
    if(this.cookie.get('authToken')){
      this.status = 1;
    }
  }

  submit(){   
    this.api.sessionRegister(this.email, this.password).then((data:any) => {
      if(data.code == 200){
        this.cookie.set('authToken',data.data.access_key);
      }
      this.checkStatus();
     })
  }
  checkStatus(){
    if(this.cookie.get('authToken')){
      this.status = 1;
    }
    else{
      this.status = 0;
    }
  }
}
