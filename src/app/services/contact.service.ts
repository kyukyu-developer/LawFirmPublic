import { Injectable } from "@angular/core";
import { SharedService } from "../shared/shared/shared.service";



@Injectable({
    providedIn: "root"
})
export class ContactService {

    apiRoute: string = "WebService_EmailTemplate.asmx/VivoContactUsEnquiry"


    constructor(
        private shared_: SharedService,
    ) {

    }

    mailEnquiry(param: any) {
        return this.shared_.postRequest('MailEnquiry', param);
    }


}