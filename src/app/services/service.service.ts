import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared/shared.service';

@Injectable({
  providedIn: 'root',
})

export class ServiceGroup {


  path: string = 'public';

  constructor(private shared_: SharedService) {
  }

  public getServiceGroup() {
    return this.shared_.getRequest('public/service/servicegroup');
  }

  getSingleService(param: any) {
    return this.shared_.getRequest('public/service/sections/' + param);
  }


  
}