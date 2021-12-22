import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfodialogPage } from './infodialog.page';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: InfodialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfodialogPageRoutingModule {}

