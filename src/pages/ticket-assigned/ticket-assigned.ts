import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { DetailsTicketPage } from '../details-ticket/details-ticket';
import { AcceptedTicketPage } from '../accepted-ticket/accepted-ticket';
import { DetailsPageModule } from '../details/details.module';

/**
 * Generated class for the TicketAssignedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-assigned',
  templateUrl: 'ticket-assigned.html',
})
export class TicketAssignedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketAssignedPage');
  }

  navDetailsTick(){
      this.navCtrl.push(DetailsTicketPage);
  }


}
