import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  promotionData: any = []
  hide: boolean = false


  constructor(private share_: SharedService, private router: Router) { }

  ngOnInit(): void {
    // this.getAllPromotions();
    this.promotionData = this.share_.promotionData
    this.hide=true;
  }


  // getAllPromotions() {
  //   let param = {
  //     RequestID: '1'
  //   }

  //   this.promotionService.getAllPromotions(param).toPromise().then((response: any) => {
  //     let data = JSON.parse(response.d);
  //     this.promotionData = data;
  //   })
  // }

}
