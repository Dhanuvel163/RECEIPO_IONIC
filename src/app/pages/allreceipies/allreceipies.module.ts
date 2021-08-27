import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { IonicModule } from '@ionic/angular';
import { AllreceipiesPageRoutingModule } from './allreceipies-routing.module';
import { AllreceipiesPage } from './allreceipies.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllreceipiesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AllreceipiesPage],
  providers:[DataService]
})
export class AllreceipiesPageModule {}
