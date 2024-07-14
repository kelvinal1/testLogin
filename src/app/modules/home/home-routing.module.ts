import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';

const routes: Routes = [
  { path: 'home', component: HomeLandingComponent},
  { path: '', component: HomeLandingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
