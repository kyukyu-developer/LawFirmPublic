import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { ServiceGroup } from '../services/service.service';
import { FaqSectionComponent } from '../elements/faq-section/faq-section.component';
import { SharedService } from '../shared/shared/shared.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  package: any
  serviceGroup: any
  faqGroup: any

  accordionItems: any

  constructor(public get_package: GeneralService, public Service: ServiceGroup, public shareservice: SharedService) { }

  ngOnInit(): void {
    this.getPackages()
    this.getServiceGroup()
    this.getFAQGroup()
  }

  getPackages(){
    this.get_package.getPackage().toPromise().then((response : any) => {
      this.package = response;
      console.log(response, 'package')
    })
  }

  getServiceGroup(){
    this.Service.getServiceGroup().toPromise().then((response: any) => {
          this.serviceGroup = response;
          console.log(this.serviceGroup, 'data')
          //this.promotionData = data;
        })
  }

  getFAQGroup(){
    this.get_package.getFAQ().toPromise().then((response: any) => {
      this.faqGroup = response;
      console.log(this.faqGroup, 'faq')
      //this.promotionData = data;
    })
  }

  goRoute(route: string) {
    this.shareservice.router.navigate(['/service-detail/' + route])
  }

  goRoute_() {
    this.shareservice.router.navigate(['/contact-us'])
  }

}
