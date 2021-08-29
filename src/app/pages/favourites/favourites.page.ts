import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  darkmode:any = window.matchMedia('(prefers-color-scheme: dark)').matches
  constructor(public data:DataService,public alertController: AlertController,private localNotifications: LocalNotifications) { }
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
  async presentAlertConfirm(item:any) {
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
            this.data.removeFavourite(item.id)
            this.notify(item)
          }
        }
      ]
    });
    await alert.present();
  }

  reorderItems(ev) {
    const itemMove = this.receipies.splice(ev.detail.from, 1)[0];
    this.receipies.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }

  notify(item:any){
      this.localNotifications.schedule({
        id: 1,
        text: `Removed ${item.title} from your favourites`,
        title:'Alert',
        foreground:true,
        // actions
        // attachments
        // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
        // data: { secret: key }
      });
  }


  // // Schedule a single notification
  // this.localNotifications.schedule({
  //   id: 1,
  //   text: 'Single ILocalNotification',
  //   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
  //   data: { secret: key }
  // });


  // // Schedule multiple notifications
  // this.localNotifications.schedule([{
  //   id: 1,
  //   text: 'Multi ILocalNotification 1',
  //   sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
  //   data: { secret:key }
  //   },{
  //   id: 2,
  //   title: 'Local ILocalNotification Example',
  //   text: 'Multi ILocalNotification 2',
  //   icon: 'http://example.com/icon.png'
  // }]);


  // // Schedule delayed notification
  // this.localNotifications.schedule({
  //   text: 'Delayed ILocalNotification',
  //   trigger: {at: new Date(new Date().getTime() + 3600)},
  //   led: 'FF0000',
  //   sound: null
  // });
}
