import {Component} from '@angular/core';
import {NavController} from 'ionic-angular'
import {CalculatePage} from "../calculate/calculate";

@Component({
  selector:'page-groups',
  templateUrl:'groups.html'
})
export class GroupsPage{
  constructor(public navCtrl:NavController){}

  itemSelected(event, item){
    this.navCtrl.push(CalculatePage);
  }

}
