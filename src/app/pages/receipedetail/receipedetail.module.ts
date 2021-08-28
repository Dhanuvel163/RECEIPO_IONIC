import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceipedetailPageRoutingModule } from './receipedetail-routing.module';
import { ReceipedetailPage } from './receipedetail.page';
import { DataService } from 'src/app/services/data.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipedetailPageRoutingModule
  ],
  declarations: [ReceipedetailPage],
  providers:[DataService]
})
export class ReceipedetailPageModule {}
