import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantesProvider } from '../../providers/restaurantes/restaurantes';

/**
 * Generated class for the AllrestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allrestaurantes',
  templateUrl: 'allrestaurantes.html',
})
export class AllrestaurantesPage {
  restaurantes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: RestaurantesProvider) {
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllrestaurantesPage');
  }
  getUsers() {
    this.provider.getUsers()
      .then(data => {
        this.restaurantes = data;
        console.log(this.restaurantes);
      });
  }



}
