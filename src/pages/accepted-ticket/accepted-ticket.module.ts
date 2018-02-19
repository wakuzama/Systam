import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptedTicketPage } from './accepted-ticket';

@NgModule({
  declarations: [
    AcceptedTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptedTicketPage),
  ],
})
export class AcceptedTicketPageModule {}
