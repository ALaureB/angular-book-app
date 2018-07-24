import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyAeP-yWq17z6FTBCZRnoNuT5pcvMIroiVE',
      authDomain: 'angular-book-app.firebaseapp.com',
      databaseURL: 'https://angular-book-app.firebaseio.com',
      projectId: 'angular-book-app',
      storageBucket: '',
      messagingSenderId: '20721535563'
    };
    firebase.initializeApp(config);
  }
}
