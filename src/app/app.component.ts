import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-clone';
  private configFirebase: Object = {
    apiKey: "AIzaSyC5yv2rDrAHw0bxpJb8H-X2_6Z474aBBh8",
    authDomain: "instagram-clone-3bb06.firebaseapp.com",
    databaseURL: "https://instagram-clone-3bb06.firebaseio.com",
    projectId: "instagram-clone-3bb06",
    storageBucket: "instagram-clone-3bb06.appspot.com",
    messagingSenderId: "534033256843",
    appId: "1:534033256843:web:fad1e205b231559f131f8e"
  };
  ngOnInit():void {
    firebase.initializeApp(this.configFirebase)
  }
}
