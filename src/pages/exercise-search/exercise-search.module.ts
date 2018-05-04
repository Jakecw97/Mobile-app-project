import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseSearchPage } from './exercise-search';

@NgModule({
  declarations: [
    ExerciseSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseSearchPage),
  ],
})
export class ExerciseSearchPageModule {}
