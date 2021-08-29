import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from '../../environments/environment'
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient,public toastController: ToastController) {
  }
  favourites:any = JSON.parse(localStorage.getItem('fav')) || []
  getrandomreceipies(){
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${environment.apiKey}`).toPromise()
  }

  getreceipeDetail(id:any){
    return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${environment.apiKey}`).toPromise()
  }

  favouriteReceipe(item:any){
    let index =  this.favourites.findIndex((d:any)=>d.id === item.id)
    if(index == -1){
      this.favourites.push(item)
      localStorage.setItem('fav',JSON.stringify(this.favourites))
      this.showToast('Added to favourites','success')
    }else{
      this.showToast('Receipe already exists in favourites','danger')
      //ITEM ALREADY EXIST
    }
  }
  removeFavourite(id){
    let index =  this.favourites.findIndex((d:any)=>d.id === id)
    if(index == -1){
      this.showToast('Receipe doesnt exists in favourites','danger')
      //ITEM DOESNT EXIST[]
    }else{
      this.favourites.splice(index, 1);
      localStorage.setItem('fav',JSON.stringify(this.favourites))
      this.showToast('Removed to favourites','success')
    }
  }

  itemExistsinFav(id){
    return this.favourites.findIndex((d:any)=>d.id === id) != -1 || false
  }

  async showToast(message:any,color:any) {
    const toast = await this.toastController.create({
      animated:true,
      color,
      message,
      position: 'top',
      keyboardClose:true,
      mode:'ios',
      duration:2000
    });
    await toast.present();
  }

  // async presentToastWithOptions() {
  //   const toast = await this.toastController.create({
  //     animated:true,
  //     color:'success',
  //     cssClass:'customtoast',
  //     header: 'Toast header',
  //     message: 'Click to Close',
  //     position: 'top',
  //     keyboardClose:true,
  //     mode:'ios',
  //     // translucent:true,
  //     duration:2000,
  //     buttons: [
  //       {
  //         side: 'start',
  //         icon: 'star',
  //         text: 'Favorite',
  //         handler: () => {
  //           console.log('Favorite clicked');
  //         }
  //       }, {
  //         text: 'Done',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   await toast.present();

  //   const { role } = await toast.onDidDismiss();
  //   // ionToastDidDismiss
  //   // ionToastDidPresent
  //   // ionToastWillDismiss
  //   // ionToastWillPresent
  //   console.log('onDidDismiss resolved with role', role);
  // }
}
