import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {}
  
  getrandomreceipies(){
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${environment.apiKey}`).toPromise()
  }

  getreceipeDetail(id:any){
    return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${environment.apiKey}`).toPromise()
  }
}
