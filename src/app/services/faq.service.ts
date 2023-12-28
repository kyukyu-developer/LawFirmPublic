
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared/shared.service';

@Injectable({
    providedIn: 'root',
})

export class FAQService {

    constructor(private shared_: SharedService) {
    }

    getAllFAQ(param: any) {
        return this.shared_.postRequest('GetAllFAQ', param);
    }
}