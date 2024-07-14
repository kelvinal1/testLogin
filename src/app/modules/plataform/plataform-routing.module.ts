import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlataformHomeComponent } from './components/plataform-home/plataform-home.component';

const routes: Routes = [
  { path: '', component: PlataformHomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlataformRoutingModule { }
