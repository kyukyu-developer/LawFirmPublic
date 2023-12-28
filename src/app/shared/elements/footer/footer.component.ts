import { Component, OnInit } from '@angular/core';
import { MenuList } from 'src/assets/data/menu/menu';
import { SharedService } from '../../shared/shared.service';
import { environment } from 'src/environments/environment';
import { ServiceGroup } from 'src/app/services/service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number | undefined
  adminLinkUrl: string = environment.adminLinkUrl
  serviceGroup : any

  constructor(private shareService: SharedService, private Service : ServiceGroup) { }


  ngOnInit(): void {
    this.currentYear = ((new Date()).getFullYear())

    this.getServiceGroup()
  }

  goRoute(route: string) {
    this.shareService.router.navigate(['/' + route])
  }

  getServiceGroup(){
    this.Service.getServiceGroup().toPromise().then((response: any) => {
          this.serviceGroup = response;
          console.log(this.serviceGroup, 'footerservicedata')
          //this.promotionData = data;
        })
  }

}
