import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  darkmode:any = window.matchMedia('(prefers-color-scheme: dark)').matches
  constructor(public data:DataService) { }
  receipies:any = []
  ngOnInit() {
    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => {
      this.darkmode = e.matches
      document.body.classList.toggle('dark')
    }
    this.getrandomreceipies()
  }
  changemode(){
    document.body.classList.toggle('dark')
  }
  async getrandomreceipies(){
    let res:any =await this.data.getrandomreceipies()
    this.receipies = res.recipes
  }

}
