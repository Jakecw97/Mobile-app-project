import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { Workout } from '../../models/workout.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';


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
  formGroup: FormGroup;
  workout: Workout;
  date: Date = new Date();
  title: string = "";
  content: string = "";

  constructor(public navCtrl: NavController, private workoutService: WorkoutServiceProvider) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content:  new FormControl(),
      date:  new FormControl(),
    })//Formgroup
  }

saveWorkout(workout: Workout) 
{
 this.workoutService.saveWorkout(workout);
 this.navCtrl.pop();   //Pop back in the stack, to previous page, in this case the homepage, after method is finished.
}//saveWorkout end

}
