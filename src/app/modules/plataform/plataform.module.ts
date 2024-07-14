import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlataformRoutingModule } from './plataform-routing.module';
import { PlataformHomeComponent } from './components/plataform-home/plataform-home.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlataformHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlataformRoutingModule,
    NgZorroAntdModule
  ]
})
export class PlataformModule { }
