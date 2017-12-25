import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceProvider } from '../../providers/device/device';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
Gateways=[];
  constructor(public navCtrl: NavController, public deviceProvider:DeviceProvider) {

    this.deviceProvider.findAllGateways().subscribe(data=>{
      console.log(data);
      this.Gateways=data.gateways;
    });
  }

}
