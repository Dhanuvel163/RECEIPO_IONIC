import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Receipies', url: '/allreceipes', icon: 'beer' },
    { title: 'Favourites', url: '/favourites', icon: 'heart' },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp()
  }


  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready')
      //CUSTOM HIDE OF SPLASHSCREEN
      setTimeout(() => {
        this.splashScreen.hide();        
      }, 1000);
    })
  }
}
