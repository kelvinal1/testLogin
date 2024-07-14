import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';


@NgModule({
  declarations: [
    HomeLandingComponent,
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule
  ]
})
export class HomeModule { }
