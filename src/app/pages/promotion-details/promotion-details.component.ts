import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-promotion-details',
  templateUrl: './promotion-details.component.html',
  styleUrls: ['./promotion-details.component.scss']
})
export class PromotionDetailsComponent implements OnInit {
  @Input()
  active_route: any = ''
  currentIndex: number = -1
  modelImage: any;
  currentId: string = ''
  singlePromotionData: any = {};
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    smartSpeed: 600,
    navText: [
      '<img src="assets/images/less-icon.png">',
      '<img src="assets/images/greater-icon.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  isModalOpen: boolean = false;

  openModal() {
    // let html = document.getElementsByTagName("html")[0]
    // html.style.overflow = 'hidden'
    // this.isModalOpen = true;

  }

  closeModal() {
    let html = document.getElementsByTagName("html")[0]
    html.style.overflow = 'unset'
    this.isModalOpen = false;
  }



  promotionData: any = []
  @Input() promoimgList: any = []
  linkUrl: any = environment.linkUrl
  postOn: string = ''
  expireOn: string = ''
  currentImageIndex: number = 0

  constructor(public shareService: SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  


  }


  

  imgClick(index: number) {
    this.currentImageIndex = index
  }


}
