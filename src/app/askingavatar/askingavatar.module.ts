import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskingavatarPageRoutingModule } from './askingavatar-routing.module';

import { AskingavatarPage } from './askingavatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskingavatarPageRoutingModule
  ],
  declarations: [AskingavatarPage]
})
export class AskingavatarPageModule {}
