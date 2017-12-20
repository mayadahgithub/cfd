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
 import { AngularFireDatabaseModule } from 'angularfire2/database';
 export const config = {
  apiKey: "AIzaSyCLCUUiMFmwLo4VFzNS8aGPzvG57xKzPxU",
  authDomain: "ionicdb-838a0.firebaseapp.com",
  databaseURL: "https://ionicdb-838a0.firebaseio.com",
  projectId: "ionicdb-838a0",
  storageBucket: "ionicdb-838a0.appspot.com",
  messagingSenderId: "1027893434981"
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
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
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
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
