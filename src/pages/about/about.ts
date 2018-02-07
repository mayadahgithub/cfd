import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //
  itemsRef: AngularFireList<any>;
  employees: Observable<any[]>;

  //

 peoplelist: AngularFireList<any>; 

  constructor(public navCtrl: NavController , public db:AngularFireDatabase) {
   
 this.peoplelist=db.list('/employ')
  }
  
  
 createEmployee(firstname,lastname, address,phone,infor){
  this.peoplelist.push({
    key_id: new Date().getTime(),
      firstname :firstname ,
        lastname :lastname,
        address:address,
        phone : phone,
        infor:infor      
          
        }).then(newPerson => {

          this.navCtrl.push(HomePage);})
    
      }

///

deleteEmploye(firstname,lastname, address,phone,infor){
  this.peoplelist.remove({
    key_id: new Date().getTime(),
      firstname :firstname ,
        lastname :lastname,
        address:address,
        phone : phone,
        infor:infor      
          
        }).then(newPerson => {

          this.itemsRef.remove(id);})
      }

//////

}
   //deleteEmployee(id){
  //this.itemsRef.remove(id);
//}