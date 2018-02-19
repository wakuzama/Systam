import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { loginData } from '../../model/interface/login';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase,} from 'angularfire2/database';
import  {AngularFireDatabaseModule} from 'angularfire2/database' ;
import { FirebaseDatabase } from '@firebase/database-types';
import { Network } from '@ionic-native/network';
import { ToastController} from'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NewTicketPage } from '../new-ticket/new-ticket';
import {TicketAssignedPage} from '../ticket-assigned/ticket-assigned' ;
import { AcceptedTicketPage } from '../accepted-ticket/accepted-ticket';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  // detailsloginRef$ : any ;
  splash = true;
  connectiontype :any ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,  private database: AngularFireDatabase,
  private network: Network , private toastCtrl:ToastController ) {

    // this.detailsloginRef$ =this.database.list('login-data') ;

    // this.detailsloginRef$.subscribe(result=>console.log(result) );
  }



    // network detection 
    getNetwork(networkStatus:string){
      let networkType =this.network.type ;
      // cheack the network type 
      if (networkType =="unknown" || networkType =="none"){

       let toast = this.toastCtrl.create({ 
         message: `Your network is not Available `,
         duration: 3000,
         position: 'top'
       });
       toast.present() ;

      }
      else{
      let toast = this.toastCtrl.create({
       message: `Your ${networkType} is ${networkStatus} `,
       duration: 3000,
       position: 'top',
       showCloseButton: true,
       closeButtonText: 'ok!',
       cssClass:"toast",
     });
     toast.present() ;
   }

 }

 ionViewDidEnter(){
     this.network.onConnect().subscribe(data=>{
          // console.log(data)
           this.getNetwork(data.type);
           this.connectiontype =data.networkStatus ;
        
     }
     , error=>console.log(error)) ;
     this.network.onDisconnect().subscribe(data=>{
      // console.log(data) ;
       this.getNetwork(data.type);
       
     }
     ,error=>console.log(error)) ;


     setTimeout(() => this.splash = false, 4000);

 }

  // btn-color(){

  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  navNewTicket(){
    this.navCtrl.push(NewTicketPage) ;

  }
  navAssingTikets(){
    this.navCtrl.push(TicketAssignedPage) ;
  } 
   
  navAcceptedTick(){
    this.navCtrl.push(AcceptedTicketPage);

    
}
}
