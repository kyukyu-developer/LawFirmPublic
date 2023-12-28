import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor() { } active_route: any = ''
  currentIndex: number = -1
  modelImage: any;
  currentId: number = 0
  singlePromotionData: any = {};
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    smartSpeed: 600,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
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
  @Input() promoimgList: any = []
  @Input() currentImgIndex: number = 0

  linkUrl: any = environment.linkUrl


  closeModal() {
    this.closeModalEvent.emit();
    this.isModalOpen = false;
  }
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }


  imgUpdate(i: number) {
    this.currentIndex = i
    this.modelImage = this.promoimgList[this.currentId]?.imgUrl[i]
    // console.log(this.modelImage);
  }

  ngOnInit(): void {
    // console.log(this.promoimgList, 'img__')
  }

}
