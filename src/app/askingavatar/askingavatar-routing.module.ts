import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskingavatarPage } from './askingavatar.page';

const routes: Routes = [
  {
    path: '',
    component: AskingavatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskingavatarPageRoutingModule {}
