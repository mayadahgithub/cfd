import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  myInfo = {
    key : '',
    firstname : '',
    lastname : '',
    country : '',
    city : '' , 
    phone : '' , 
    salary : '' , 
    email : '' 
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.myInfo.key = this.navParams.get('key')
    this.myInfo.firstname = this.navParams.get('firstname')
    this.myInfo.lastname = this.navParams.get('lastname')
    this.myInfo.country = this.navParams.get('country')
    this.myInfo.city = this.navParams.get('city')
    this.myInfo.phone = this.navParams.get('phone')
    this.myInfo.salary = this.navParams.get('salary')
    this.myInfo.email = this.navParams.get('email')


  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad  ContactPage');
  }




}
