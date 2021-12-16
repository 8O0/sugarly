import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfodialogPageRoutingModule } from './infodialog-routing.module';

import { InfodialogPage } from './infodialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfodialogPageRoutingModule
  ],
  declarations: [InfodialogPage]
})
export class InfodialogPageModule {}
