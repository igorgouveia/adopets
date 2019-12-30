import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzButtonModule, NzResultModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule, NzResultModule, CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],

})
export class WelcomeModule {
  
 }
