import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
//import *as firebease from 'firebase';
//import {environment} from '../../'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 peoplelist: AngularFireList<any>;

  constructor(public navCtrl: NavController , public db:AngularFireDatabase) {
   
 this.peoplelist=db.list('people')
  }
  
  
 createEmployee(firstname,lastname,city,country,phone,email, salary){
  this.peoplelist.push({
   key_id: new Date().getTime(),
      firstname :firstname ,
        lastname :lastname,
         city: city,
        country: country,
          phone : phone,
          email :email,
          salary:salary
        }).then(newPerson => {

          this.navCtrl.push(HomePage);
        })
}
}