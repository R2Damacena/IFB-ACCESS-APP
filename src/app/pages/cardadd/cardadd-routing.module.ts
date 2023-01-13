import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardaddPage } from './cardadd.page';

const routes: Routes = [
  {
    path: '',
    component: CardaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardaddPageRoutingModule {}
