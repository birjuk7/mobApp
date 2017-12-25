//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceProvider {

  constructor(public http: Http) {
  }
  findAllGateways(){
    let ep = 'http://localhost:8080/gateways/all';
    return this.http.get(ep)
      .map(res => res.json());
  }
  addGateway(gateway){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:8080/gateways/add';
    return this.http.post(ep,gateway, { headers: headers })
      .map(res => res.json());
  }
}
