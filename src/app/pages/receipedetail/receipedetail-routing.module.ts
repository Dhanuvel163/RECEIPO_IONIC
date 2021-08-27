import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipedetailPage } from './receipedetail.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipedetailPageRoutingModule {}
