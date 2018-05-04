import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ExerciseSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise-search',
  templateUrl: 'exercise-search.html',
})
export class ExerciseSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
  }

  ionViewWillEnter() { //Refreshes the browser each time the page is about to be entered
    console.log('ionViewDidLoad ExerciseSearchPage');
    this.openWebPage()
  
  }

  openWebPage(){
    const options: InAppBrowserOptions = {
      zoom: 'yes'
    }
    const browser = this.inAppBrowser.create('https://www.bodybuilding.com/exercises', '_self', options); // _self ensures the search site opens in the inappbrowser
    
  }
  
  ionViewDidEnter() { //pushes back to tabs page upon browser
    
    this.navCtrl.push(TabsPage)
  
  }

}
