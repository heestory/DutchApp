import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {MeetingNamePage} from '../pages/meeting-name/meeting-name';
import {GroupsPage} from '../pages/groups/groups';
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  public rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDbFrWAL0AAE0ntEtHTvW_hxqZmmWOexmo",
      authDomain: "dutchapp-b2bfe.firebaseapp.com",
      databaseURL: "https://dutchapp-b2bfe.firebaseio.com",
      storageBucket: "dutchapp-b2bfe.appspot.com",
      messagingSenderId: "301087941085"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.rootPage = MeetingNamePage;
      } else{
        this.rootPage = GroupsPage;
      }
    });
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component:MeetingNamePage},
      { title: 'Groups', component:GroupsPage}
    //  { title: 'PhoneBook', component:PhoneBookPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
