import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewWorkoutPage } from './view-workout';

@NgModule({
  declarations: [
    ViewWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewWorkoutPage),
  ],
})
export class ViewWorkoutPageModule {}
