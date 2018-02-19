import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketAssignedPage } from './ticket-assigned';

@NgModule({
  declarations: [
    TicketAssignedPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketAssignedPage),
  ],
})
export class TicketAssignedPageModule {}
