import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceProvider } from '../../providers/device/device';
import * as io from 'socket.io-client'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  d_name: String;
  d_type: String;
  uApi: String;
  end_node1: String;
  end_node2: String;
  show = "";
  show2 = "";
  socket;
  constructor(public navCtrl: NavController, public deviceProvider: DeviceProvider) {
    this.socket = io();
    this.socket.on('topic1', msg => {
      this.show2 = JSON.stringify(msg.payload);
    });
  }
  addGateways() {
    let gateway = {
      metadata: {
        d_name: this.d_name,
        d_type: this.d_type,
        uAPI: this.uApi
      },
      endNodes: [this.end_node1, this.end_node2]
    }
    this.deviceProvider.addGateway(gateway).subscribe(data => {
      this.show = data.msg;
    });
    this.d_name = " ";
    this.d_type = " ";
    this.uApi = " ";
    this.end_node1 = " ";
    this.end_node2 = " ";
  }
}
