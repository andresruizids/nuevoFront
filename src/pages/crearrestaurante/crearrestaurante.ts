import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantesProvider } from '../../providers/restaurantes/restaurantes';

export class AdvancedSocialPage { }

/**
 * Generated class for the CrearrestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearrestaurante',
  templateUrl: 'crearrestaurante.html',
})
export class CrearrestaurantePage {
  formularioCrearRestaurante: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public provider: RestaurantesProvider) {
    this.formularioCrearRestaurante = this.createMyForm();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CrearrestaurantePage');
  }

  saveData() {
    this.provider.addUser(this.formularioCrearRestaurante.value);
    //console.log(this.formularioCrearRestaurante.value);
    console.log(JSON.stringify(this.formularioCrearRestaurante.value));
  }
  private createMyForm() {
    return this.formBuilder.group({
      nit: [0, Validators.required,],
      razonSocial: ['', Validators.required],
      razonComercial: ['', Validators.required],
      ciudad: ['', Validators.required],
      barrio: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      precioMinimoPlato: [0, Validators.required],
      precioMaximoPlato: [0, Validators.required],
      tipoMenu: ['', Validators.required],
      puntuacion: [0, Validators.required],
    });
  }

}
