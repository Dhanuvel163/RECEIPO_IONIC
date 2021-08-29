import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouritesPageRoutingModule } from './favourites-routing.module';
import { FavouritesPage } from './favourites.page';
import { DataService } from 'src/app/services/data.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesPageRoutingModule
  ],
  declarations: [FavouritesPage],
  providers:[DataService]
})
export class FavouritesPageModule {}
