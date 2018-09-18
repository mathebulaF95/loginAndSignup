import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;



@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  RestPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

  Reset(){
    var auth = firebase.auth();
    var emailAddress = this.RestPassword;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
    }).catch(function(error) {
     // An error happened.
    });

    this.navCtrl.push("LoginPage");
  }
}
