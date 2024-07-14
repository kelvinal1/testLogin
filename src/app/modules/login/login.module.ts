import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { FormsModule } from '@angular/forms';
import { LoginVerificationComponent } from './components/login-verification/login-verification.component';


@NgModule({
  declarations: [
    LoginHomeComponent,
    LoginVerificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    LoginRoutingModule,
    NgZorroAntdModule
  ]
})
export class LoginModule { }
