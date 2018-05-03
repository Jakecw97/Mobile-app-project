import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddWorkoutPage } from '../add-workout/add-workout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  addWorkout()
  {
    this.navCtrl.push(AddWorkoutPage);
  }
}
