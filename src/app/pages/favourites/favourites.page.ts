import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  darkmode:any = window.matchMedia('(prefers-color-scheme: dark)').matches
  constructor(public data:DataService,public alertController: AlertController) { }
  receipies:any = []
  ngOnInit() {
    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => {
      this.darkmode = e.matches
      document.body.classList.toggle('dark')
    }
    this.data.setFavs()
  }
  changemode(){
    document.body.classList.toggle('dark')
  }
  async presentAlertConfirm(id:any) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Confirm delete ?',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.data.removeFavourite(id)
          }
        }
      ]
    });
    await alert.present();
  }

}
