import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared/shared.service';

@Injectable({
  providedIn: 'root',
})

export class GeneralService {

  constructor(private shared_: SharedService) {
  }

  public getAboutUs() {
    return this.shared_.getRequest('public/service/servicegroup/aboutus');
  }

  public getMembers() {
    return this.shared_.getRequest('public/composition/members');
  }

  public getPackage() {
    return this.shared_.getRequest('public/package');
  }

  public getFAQ() {
    return this.shared_.getRequest('public/faq');
  }

}