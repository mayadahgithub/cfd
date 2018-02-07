import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EditpersonPage } from '../pages/editperson/editperson';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 import { AngularFireModule} from 'angularfire2';
 import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
 import { AngularFireAuthModule } from 'angularfire2/auth';
 import { AngularFirestore  } from 'angularfire2/firestore';


 export const  firebaseConfig = {
  apiKey: "AIzaSyB-ngYBJRSxJIkcQYRknhny-r7ydq-gUG8",
  authDomain: "cfdp-294a0.firebaseapp.com",
  databaseURL: "https://cfdp-294a0.firebaseio.com",
  projectId: "cfdp-294a0",
  storageBucket: "cfdp-294a0.appspot.com",
  messagingSenderId: "440067778860"
};


@NgModule({
  declarations: [  
   
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditpersonPage
  ],
  imports: [
    
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [   
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditpersonPage
  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
