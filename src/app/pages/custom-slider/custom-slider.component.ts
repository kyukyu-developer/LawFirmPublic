import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, transition, style, animate , state} from '@angular/animations';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(":leave", [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' })),
      ])
    ])
  ],
})
export class CustomSliderComponent {

  carouselOptions = {
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
  };

  items = [
    {
      image: 'https://cdn.pixabay.com/photo/2017/10/24/10/30/business-2884023_960_720.jpg',
      alt: 'Image 1',
      title: 'Slide 1 Title',
      description: 'Slide 1 Description',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg',
      alt: 'Image 2',
      title: 'Slide 2 Title',
      description: 'Slide 2 Description',
    },
    // Add more items as needed
  ];

  currentIndex = 0;

  onSlideChange(event: any) {
    this.currentIndex = event.current;
  }


}
