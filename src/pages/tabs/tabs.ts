import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ExerciseSearchPage } from '../exercise-search/exercise-search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExerciseSearchPage;

  constructor() {

  }
}
