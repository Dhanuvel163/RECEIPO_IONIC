import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'allreceipes',
    pathMatch: 'full'
  },
  {
    path: 'allreceipes',
    loadChildren: () => import('./pages/allreceipies/allreceipies.module').then( m => m.AllreceipiesPageModule)
  },
  {
    path: 'receipedetail/:id',
    loadChildren: () => import('./pages/receipedetail/receipedetail.module').then( m => m.ReceipedetailPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
