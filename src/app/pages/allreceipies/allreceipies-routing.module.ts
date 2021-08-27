import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllreceipiesPage } from './allreceipies.page';

const routes: Routes = [
  {
    path: '',
    component: AllreceipiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllreceipiesPageRoutingModule {}
