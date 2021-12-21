import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'infodialog',
    loadChildren: () => import('./infodialog/infodialog.module').then( m => m.InfodialogPageModule)
  }

];

@NgModule({
  imports: [MatButtonModule, MatDialogModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
