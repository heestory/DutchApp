import {Component} from '@angular/core';
import {CalculatePage} from "../calculate/calculate";
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector:'meeting-name',
  templateUrl:'meeting-name.html'
})
export class MeetingNamePage{
  constructor(public navCtrl : NavController, public navParams: NavParams){}

  nextPage(event,item){
    this.navCtrl.push(CalculatePage,{
      item:item
    });
  }
}
