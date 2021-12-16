import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'askingavatar',
    loadChildren: () => import('./askingavatar/askingavatar.module').then( m => m.AskingavatarPageModule)
  },
  {
    path: 'changeavatar',
    loadChildren: () => import('./changeavatar/changeavatar.module').then( m => m.ChangeavatarPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
