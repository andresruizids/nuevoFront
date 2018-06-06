import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearrestaurantePage } from '../crearrestaurante/crearrestaurante';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  onClick() {
    this.navCtrl.push(CrearrestaurantePage);
  }

}
