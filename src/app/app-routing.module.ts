import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'allreceipies',
    pathMatch: 'full'
  },
  {
    path: 'allreceipies',
    loadChildren: () => import('./pages/allreceipies/allreceipies.module').then( m => m.AllreceipiesPageModule)
  },
  {
    path: 'receipedetail/:id',
    loadChildren: () => import('./pages/receipedetail/receipedetail.module').then( m => m.ReceipedetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
