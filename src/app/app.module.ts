import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddWorkoutPage } from '../pages/add-workout/add-workout';
import { WorkoutServiceProvider } from '../providers/workout-service/workout-service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewWorkoutPage } from '../pages/view-workout/view-workout';
import { TabsPage } from '../pages/tabs/tabs';
import { ExerciseSearchPage } from '../pages/exercise-search/exercise-search';
import { InAppBrowser } from '@ionic-native/in-app-browser'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddWorkoutPage,
    ViewWorkoutPage,
    ExerciseSearchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddWorkoutPage,
    ViewWorkoutPage,
    ExerciseSearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkoutServiceProvider,
    InAppBrowser
  ]
})
export class AppModule {}
