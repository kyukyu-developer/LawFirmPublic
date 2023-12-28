import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared/shared.service';

@Injectable({
  providedIn: 'root',
})

export class NewService {

  constructor(private shared_: SharedService) {
  }

  getAllNews(param: any) {
    return this.shared_.postRequest('GetAllNews', param);
  }


  getSingleNews(param: any) {
    return this.shared_.postRequest('GetNewDetail', param);
  }
}