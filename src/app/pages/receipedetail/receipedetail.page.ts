import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-receipedetail',
  templateUrl: './receipedetail.page.html',
  styleUrls: ['./receipedetail.page.scss'],
})
export class ReceipedetailPage implements OnInit {
  receipe:any={}
  darkmode:any = window.matchMedia('(prefers-color-scheme: dark)').matches
  constructor(
    public route:ActivatedRoute,private socialSharing: SocialSharing,
    public data:DataService,public loadingController: LoadingController) { 
    this.route.paramMap.subscribe((params:any)=>{
      this.getreceipeDetailFunc(params.params.id)
    })
  }
  async getreceipeDetailFunc(id:any){ 
    const loading = await this.loadingController.create({
      message: 'Cooking data 🧑‍🍳'
    });
    await loading.present();
    this.receipe = await this.data.getreceipeDetail(id)
    await loading.dismiss();
  }
  changemode(){
    document.body.classList.toggle('dark')
  }
  ngOnInit() {
    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => {
      this.darkmode = e.matches
      document.body.classList.toggle('dark')
    }
  }



  // // Check if sharing via email is supported
  // this.socialSharing.canShareViaEmail().then(() => {
  //   // Sharing via email is possible
  // }).catch(() => {
  //   // Sharing via email is not possible
  // });

  // // Share via email
  // this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  //   // Success!
  // }).catch(() => {
  //   // Error!
  // });

  shareFB(item:any){
    this.socialSharing.shareViaFacebook('Check this cool receipe !',item.image||'https://spoonacular.com/recipeImages/157106-312x231.jpg',item.sourceUrl || '')
    .then(()=>console.log('FB share'))
    .catch((e)=>{
      this.data.showToast('Please install facebook app to share','danger')
      // var link = document.createElement('a');
      // link.href = `https://facebook.com/sharer/sharer.php?u=${item.sourceUrl}`
      // link.href = `https://twitter.com/intent/tweet/?text=Check this cool receipe !&url=${item.sourceUrl}&image=${item.image}`
      // link.target = '_blank'
      // link.click();
    })
  }

  shareInsta(item:any){
    this.socialSharing.shareViaInstagram('Check this cool receipe !',item.image||'https://spoonacular.com/recipeImages/157106-312x231.jpg')
    .then(()=>console.log('INSTA share'))
    .catch((e)=>{
      this.data.showToast('Please install instagram app to share','danger')
    })
  }

  shareWhatsapp(item:any){
    this.socialSharing.shareViaWhatsApp('Check this cool receipe !',item.image||'https://spoonacular.com/recipeImages/157106-312x231.jpg',item.sourceUrl || '')
    .then(()=>console.log('WHATSAPP share'))
    .catch((e)=>{
      this.data.showToast('Please install whatsapp app to share','danger')
    })
  }
}


// {
//   "vegetarian": false,
//   "vegan": false,
//   "glutenFree": true,
//   "dairyFree": true,
//   "veryHealthy": true,
//   "cheap": false,
//   "veryPopular": false,
//   "sustainable": false,
//   "weightWatcherSmartPoints": 6,
//   "gaps": "no",
//   "lowFodmap": false,
//   "preparationMinutes": 1485,
//   "cookingMinutes": 0,
//   "aggregateLikes": 6,
//   "spoonacularScore": 94,
//   "healthScore": 82,
//   "creditsText": "Delicious Days",
//   "sourceName": "Delicious Days",
//   "pricePerServing": 413.32,
//   "extendedIngredients": [
//       {
//           "id": 10211821,
//           "aisle": "Produce",
//           "image": "yellow-bell-pepper.jpg",
//           "consistency": "solid",
//           "name": "bell pepper",
//           "nameClean": "bell pepper",
//           "original": "Freshly ground black pepper",
//           "originalString": "Freshly ground black pepper",
//           "originalName": "Freshly ground black pepper",
//           "amount": 6,
//           "unit": "servings",
//           "meta": [
//               "black",
//               "freshly ground"
//           ],
//           "metaInformation": [
//               "black",
//               "freshly ground"
//           ],
//           "measures": {
//               "us": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               },
//               "metric": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               }
//           }
//       },
//       {
//           "id": 11819,
//           "aisle": "Produce",
//           "image": "red-chili.jpg",
//           "consistency": "solid",
//           "name": "chillies",
//           "nameClean": "chili pepper",
//           "original": "1-2 x Red Chillies",
//           "originalString": "1-2 x Red Chillies",
//           "originalName": "x Red Chillies",
//           "amount": 1,
//           "unit": "",
//           "meta": [
//               "red"
//           ],
//           "metaInformation": [
//               "red"
//           ],
//           "measures": {
//               "us": {
//                   "amount": 1,
//                   "unitShort": "",
//                   "unitLong": ""
//               },
//               "metric": {
//                   "amount": 1,
//                   "unitShort": "",
//                   "unitLong": ""
//               }
//           }
//       },
//       {
//           "id": 1012047,
//           "aisle": "Spices and Seasonings",
//           "image": "salt.jpg",
//           "consistency": "solid",
//           "name": "coarse sea salt",
//           "nameClean": "coarse sea salt",
//           "original": "Coarse Sea Salt",
//           "originalString": "Coarse Sea Salt",
//           "originalName": "Coarse Sea Salt",
//           "amount": 6,
//           "unit": "servings",
//           "meta": [],
//           "metaInformation": [],
//           "measures": {
//               "us": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               },
//               "metric": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               }
//           }
//       },
//       {
//           "id": 1034053,
//           "aisle": "Oil, Vinegar, Salad Dressing",
//           "image": "olive-oil.jpg",
//           "consistency": "liquid",
//           "name": "extra-virgin olive oil",
//           "nameClean": "extra virgin olive oil",
//           "original": "Olive Oil extra vergine",
//           "originalString": "Olive Oil extra vergine",
//           "originalName": "Olive Oil extra vergine",
//           "amount": 6,
//           "unit": "servings",
//           "meta": [],
//           "metaInformation": [],
//           "measures": {
//               "us": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               },
//               "metric": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               }
//           }
//       },
//       {
//           "id": 15001,
//           "aisle": "Seafood",
//           "image": "anchovies.jpg",
//           "consistency": "solid",
//           "name": "fresh anchovies",
//           "nameClean": "boquerones",
//           "original": "500 g fresh anchovies",
//           "originalString": "500 g fresh anchovies",
//           "originalName": "fresh anchovies",
//           "amount": 500,
//           "unit": "g",
//           "meta": [
//               "fresh"
//           ],
//           "metaInformation": [
//               "fresh"
//           ],
//           "measures": {
//               "us": {
//                   "amount": 1.102,
//                   "unitShort": "lb",
//                   "unitLong": "pounds"
//               },
//               "metric": {
//                   "amount": 500,
//                   "unitShort": "g",
//                   "unitLong": "grams"
//               }
//           }
//       },
//       {
//           "id": 11297,
//           "aisle": "Produce;Spices and Seasonings",
//           "image": "parsley.jpg",
//           "consistency": "solid",
//           "name": "fresh parsley",
//           "nameClean": "parsley",
//           "original": "fresh parsley, chopped",
//           "originalString": "fresh parsley, chopped",
//           "originalName": "fresh parsley, chopped",
//           "amount": 6,
//           "unit": "servings",
//           "meta": [
//               "fresh",
//               "chopped"
//           ],
//           "metaInformation": [
//               "fresh",
//               "chopped"
//           ],
//           "measures": {
//               "us": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               },
//               "metric": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               }
//           }
//       },
//       {
//           "id": 2049,
//           "aisle": "Produce;Spices and Seasonings",
//           "image": "thyme.jpg",
//           "consistency": "solid",
//           "name": "fresh thyme",
//           "nameClean": "thyme",
//           "original": "fresh thyme",
//           "originalString": "fresh thyme",
//           "originalName": "fresh thyme",
//           "amount": 6,
//           "unit": "servings",
//           "meta": [
//               "fresh"
//           ],
//           "metaInformation": [
//               "fresh"
//           ],
//           "measures": {
//               "us": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               },
//               "metric": {
//                   "amount": 6,
//                   "unitShort": "servings",
//                   "unitLong": "servings"
//               }
//           }
//       },
//       {
//           "id": 11215,
//           "aisle": "Produce",
//           "image": "garlic.png",
//           "consistency": "solid",
//           "name": "garlic cloves",
//           "nameClean": "garlic",
//           "original": "1-2 x garlic cloves, chopped",
//           "originalString": "1-2 x garlic cloves, chopped",
//           "originalName": "x garlic cloves, chopped",
//           "amount": 1,
//           "unit": "",
//           "meta": [
//               "chopped"
//           ],
//           "metaInformation": [
//               "chopped"
//           ],
//           "measures": {
//               "us": {
//                   "amount": 1,
//                   "unitShort": "",
//                   "unitLong": ""
//               },
//               "metric": {
//                   "amount": 1,
//                   "unitShort": "",
//                   "unitLong": ""
//               }
//           }
//       },
//       {
//           "id": 9152,
//           "aisle": "Produce",
//           "image": "lemon-juice.jpg",
//           "consistency": "liquid",
//           "name": "juice of lemon",
//           "nameClean": "lemon juice",
//           "original": "Juice of 1 lemon",
//           "originalString": "Juice of 1 lemon",
//           "originalName": "Juice of lemon",
//           "amount": 1,
//           "unit": "",
//           "meta": [],
//           "metaInformation": [],
//           "measures": {
//               "us": {
//                   "amount": 1,
//                   "unitShort": "",
//                   "unitLong": ""
//               },
//               "metric": {
//                   "amount": 1,
//                   "unitShort": "",
//                   "unitLong": ""
//               }
//           }
//       },
//       {
//           "id": 1012068,
//           "aisle": "Oil, Vinegar, Salad Dressing",
//           "image": "dark-sauce.jpg",
//           "consistency": "liquid",
//           "name": "sherry vinegar",
//           "nameClean": "sherry vinegar",
//           "original": "5 tbsp Sherry Vinegar",
//           "originalString": "5 tbsp Sherry Vinegar",
//           "originalName": "Sherry Vinegar",
//           "amount": 5,
//           "unit": "tbsp",
//           "meta": [],
//           "metaInformation": [],
//           "measures": {
//               "us": {
//                   "amount": 5,
//                   "unitShort": "Tbsps",
//                   "unitLong": "Tbsps"
//               },
//               "metric": {
//                   "amount": 5,
//                   "unitShort": "Tbsps",
//                   "unitLong": "Tbsps"
//               }
//           }
//       }
//   ],
//   "id": 10,
//   "title": "Marinated Boquerones",
//   "readyInMinutes": 45,
//   "servings": 6,
//   "sourceUrl": "http://www.deliciousdays.com/archives/2006/07/23/boqueroneshave-no-fear/",
//   "image": "https://spoonacular.com/recipeImages/10-556x370.jpg",
//   "imageType": "jpg",
//   "summary": "You can never have too many main course recipes, so give Marinated Boquerones a try. This recipe serves 6. Watching your figure? This caveman, gluten free, dairy free, and primal recipe has <b>243 calories</b>, <b>17g of protein</b>, and <b>18g of fat</b> per serving. For <b>$3.76 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. 6 people have tried and liked this recipe. A mixture of parsley, chillies, coarse sea salt, and a handful of other ingredients are all it takes to make this recipe so tasty. To use up the extra-virgin olive oil you could follow this main course with the <a href=\"https://spoonacular.com/recipes/chocolate-date-caramel-walnut-tart-gluten-free-grain-free-vegan-196400\">Chocolate Date Caramel Walnut Tart (Gluten-Free, Grain-Free, Vegan)</a> as a dessert. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is great. Try <a href=\"https://spoonacular.com/recipes/roasted-peppers-with-boquerones-12\">Roasted Peppers with Boquerones</a>, <a href=\"https://spoonacular.com/recipes/tomato-and-boquerones-salad-with-garlicky-breadcrumbs-49\">Tomato And Boquerones Salad With Garlicky Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/marinated-rib-eye-147171\">Marinated Rib Eye</a> for similar recipes.",
//   "cuisines": [],
//   "dishTypes": [
//       "lunch",
//       "main course",
//       "main dish",
//       "dinner"
//   ],
//   "diets": [
//       "gluten free",
//       "dairy free",
//       "paleolithic",
//       "primal",
//       "pescatarian"
//   ],
//   "occasions": [],
//   "winePairing": {},
//   "instructions": null,
//   "analyzedInstructions": [],
//   "originalId": null
// }