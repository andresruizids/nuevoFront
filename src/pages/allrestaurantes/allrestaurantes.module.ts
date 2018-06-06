import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllrestaurantesPage } from './allrestaurantes';

@NgModule({
  declarations: [
    AllrestaurantesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllrestaurantesPage),
  ],
})
export class AllrestaurantesPageModule {}
