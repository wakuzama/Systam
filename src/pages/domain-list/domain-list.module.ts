import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainListPage } from './domain-list';

@NgModule({
  declarations: [
    DomainListPage,
  ],
  imports: [
    IonicPageModule.forChild(DomainListPage),
  ],
})
export class DomainListPageModule {}
