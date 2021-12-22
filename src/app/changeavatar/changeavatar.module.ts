import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeavatarPageRoutingModule } from './changeavatar-routing.module';

import { ChangeavatarPage } from './changeavatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeavatarPageRoutingModule
  ],
  declarations: [ChangeavatarPage]
})
export class ChangeavatarPageModule {}
