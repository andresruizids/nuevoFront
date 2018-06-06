import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the CrearusuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearusuario',
  templateUrl: 'crearusuario.html',
})
export class CrearusuarioPage {
  formularioCrearUsuario: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.formularioCrearUsuario = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearusuarioPage');
  }
  saveData() {
    console.log(this.formularioCrearUsuario.value);
  }
  private createMyForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      typeId: ['', Validators.required],
      CC: ['', Validators.required],
      gender: ['', Validators.required],
      dateBirth: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),

    });
  }

}
