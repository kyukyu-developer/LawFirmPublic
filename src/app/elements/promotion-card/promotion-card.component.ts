import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss']
})
export class PromotionCardComponent implements OnInit {

  routeLink: string = "";
  @Input()
  promotionData: any = '';
  defaultLoadingImage: string = environment.defaultLoadingImage;
  errorImage: string = environment.errorImage;
  CoverPhotoURL!: string;
  title!: string;
  postID!: string;

  coverphoto: any = '';

  linkUrl: string = environment.linkUrl

  @Input() related: boolean = false

  constructor(public shareService: SharedService) { }

  ngOnInit(): void {
    this.coverphoto = this.promotionData?.CoverPhotoURL
    // console.log(this.promotionData, 'promotionData')
  }



}
