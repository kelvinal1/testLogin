import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { LoginVerificationComponent } from './components/login-verification/login-verification.component';

const routes: Routes = [
  { path: '', component: LoginHomeComponent},
  { path: 'verification', component: LoginVerificationComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
