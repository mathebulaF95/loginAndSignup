import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var firebase;

 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  email;
  password;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(){
   firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(User =>{
     this.navCtrl.push("HomePage")
      
    })
  }

  signUp(){
    // firebase.auth().createUserWithEmailAndPassword( this.email,this.password).then(User =>{
    //   this.navCtrl.push(SignUpPage)
      
    // })
    this.navCtrl.push("SignUpPage");
}

signing(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(User =>{
    this.navCtrl.push("HomePage");
  })
}

forget(){
 
this.navCtrl.push("ForgetPage");

}
}
