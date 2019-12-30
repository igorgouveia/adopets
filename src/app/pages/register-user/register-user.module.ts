import { NgModule } from '@angular/core';

import { RegisterUserRoutingModule } from './register-user-routing.module';

import { RegisterUserComponent } from './register-user.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule, NzFormModule, NzButtonModule, NzResultModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [RegisterUserRoutingModule, FormsModule, NzInputModule, NzFormModule, NzButtonModule, NzResultModule, CommonModule ],
  declarations: [RegisterUserComponent],
  exports: [RegisterUserComponent]
})
export class RegisterModule {
  
 }
