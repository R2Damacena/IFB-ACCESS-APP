import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardaddPageRoutingModule } from './cardadd-routing.module';

import { CardaddPage } from './cardadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardaddPageRoutingModule
  ],
  declarations: [CardaddPage]
})
export class CardaddPageModule {}
