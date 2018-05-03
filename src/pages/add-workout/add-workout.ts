import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';

/**
 * Generated class for the AddWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
})
export class AddWorkoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutServiceProvider) {
  }

saveWorkout(value: {title: string})
{

}//save workout end

}
