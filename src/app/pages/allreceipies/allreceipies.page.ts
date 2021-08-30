import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-allreceipies',
  templateUrl: './allreceipies.page.html',
  styleUrls: ['./allreceipies.page.scss'],
})
export class AllreceipiesPage implements OnInit {

  darkmode:any = window.matchMedia('(prefers-color-scheme: dark)').matches
  constructor(public data:DataService,public loadingController: LoadingController) { }
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
  async doRefresh(e:any){
    await this.refreshrandomreceipies()
    e.target.complete()
  }
  async refreshrandomreceipies(){
    let res:any =await this.data.getrandomreceipies()
    this.receipies = res.recipes
  }

  async getrandomreceipies(){
    const loading = await this.loadingController.create({
      message: 'Cooking data 🧑‍🍳'
    });
    await loading.present();
    let res:any =await this.data.getrandomreceipies()
    this.receipies = res.recipes
    await loading.dismiss();
  }
}

