import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeavatarPage } from './changeavatar.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeavatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeavatarPageRoutingModule {}
