import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from '../details/details' ;

/**
 * Generated class for the DomainListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domain-list',
  templateUrl: 'domain-list.html',
})
export class DomainListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  navigateDetails(){
    this.navCtrl.push(DetailsPage) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomainListPage');
  }

  
}
