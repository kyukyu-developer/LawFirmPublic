import { environment } from 'src/environments/environment';
import { Component, OnInit,Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() newimgList: any = []
  linkUrl: any = environment.linkUrl
  postOn: string = ''
  expireOn: string = ''
  currentImageIndex: number = 0
  singleNewData: any = {};
  constructor() { }

  ngOnInit(): void {
    this.singleNewData = this.newimgList;
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    navText: [
      // '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      // '<i class="fa fa-angle-right" aria-hidden="true"></i>',
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
    nav: false,
  };

}
