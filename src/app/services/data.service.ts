import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {}
  favourites:any = JSON.parse(localStorage.getItem('fav')) || []
  getrandomreceipies(){
    // return this.http.get(`https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${environment.apiKey}`).toPromise()
  }

  getreceipeDetail(id:any){
    // return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${environment.apiKey}`).toPromise()
  }

  favouriteReceipe(item:any){
    let index =  this.favourites.findIndex((d:any)=>d.id === item.id)
    if(index == -1){
      this.favourites.push(item)
      localStorage.setItem('fav',JSON.stringify(this.favourites))
    }else{
      //ITEM ALREADY EXIST
    }
  }
  removeFavourite(id){
    let index =  this.favourites.findIndex((d:any)=>d.id === id)
    if(index == -1){
      //ITEM DOESNT EXIST[]
    }else{
      this.favourites.splice(index, 1);
      localStorage.setItem('fav',JSON.stringify(this.favourites))
    }
  }

  itemExistsinFav(id){
    return this.favourites.findIndex((d:any)=>d.id === id) != -1 || false
  }
}
