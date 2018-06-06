import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearrestaurantePage } from './crearrestaurante';

@NgModule({
  declarations: [
    CrearrestaurantePage,
  ],
  imports: [
    IonicPageModule.forChild(CrearrestaurantePage),
  ],
})
export class CrearrestaurantePageModule {}
