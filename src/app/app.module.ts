import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { SignUpPage } from '../sign-up/sign-up';
//import { LoginPage } from '../login/login';

@NgModule({
  declarations: [
    MyApp,
    //SignUpPage,
    //LoginPage,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //SignUpPage,
    //LoginPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
