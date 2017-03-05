import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import {TransmissionPage} from "../transmission/transmission";

@Component({
  selector:'page-calculate',
  templateUrl:'calculate.html'
})
export class CalculatePage{
  constructor(public alertCtrl: AlertController, public navCtrl : NavController, public navParams : NavParams){

  }

  openPrompt(){
    let prompt = this.alertCtrl.create({
      title : 'Adding Price',
      message : 'Enter a price and Using content',
      inputs:[
        {
          name:'Price',
          placeholder : 'price'
        },
        {
          name:'Content',
          placeholder:'content'
        }
      ],
      buttons:[
        {
          text:'Save',
          handler:data =>{
            console.log('save');
          }
        },
        {
          text:'Cancel',
          handler:data =>{
            console.log('cancel');
          }
        }
      ]
    });
    prompt.present();
  }

  nextPage(event, item){
    this.navCtrl.push(TransmissionPage,{
      item:item
    });
  }
}
