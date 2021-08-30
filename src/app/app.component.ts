import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  disconnectSubscription:any;
  connectSubscription:any
  public appPages = [
    { title: 'Receipies', url: '/allreceipes', icon: 'beer' },
    { title: 'Favourites', url: '/favourites', icon: 'heart' },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private network: Network,
    public data:DataService
  ) {
    this.initializeApp()
  }


  initializeApp() {
    this.platform.ready().then(() => {

      this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        this.data.showToast('Network Disconnected','danger')
      });
      this.connectSubscription = this.network.onConnect().subscribe(() => {
        this.data.showToast('Network Connected','success')
        setTimeout(() => {
          if (this.network.type === 'wifi') {
            console.log('we got a wifi connection, woohoo!');
          }
        }, 3000);
      });


      console.log('Platform ready')
      //CUSTOM HIDE OF SPLASHSCREEN
      setTimeout(() => {
        this.splashScreen.hide();        
      }, 1000);
    })
  }

  ngOnDestroy(){
    this.disconnectSubscription.unsubscribe();
    this.connectSubscription.unsubscribe();
  }
}
