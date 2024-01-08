import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
declare var $: any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],

})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = (event: Event) => {
      // Your onscroll logic goes here
      let mainNav = document.getElementById('roto') as HTMLHtmlElement
      // const upbtn = document.getElementById("upBtn");
      if (mainNav) {
        if (window.pageYOffset > 1) {
          mainNav.classList.add("active");
          // upbtn.classList.add("active");
        } else {
          mainNav.classList.remove("active");
          // upbtn.classList.remove("active");
        }
      }
    };

    window.addEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent() {
    // Get the current scroll position when needed
    const scroll: number = window.scrollY;

    // Adjust the threshold as needed
    const threshold = 710;
    const slideLeft: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("slide-left") as HTMLCollectionOf<HTMLElement>;
    const slideRight: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("slide-right") as HTMLCollectionOf<HTMLElement>;
    console.log(scroll, "scroll");
    // Add or remove classes based on scroll position
    if (scroll > threshold) {
      for (let i = 0; i < slideLeft.length; i++) {
        slideLeft[i].classList.remove('slide-out')
        slideLeft[i].classList.add('slide-in');
      }
      for (let i = 0; i < slideRight.length; i++) {
        slideRight[i].classList.remove('slide-out')
        slideRight[i].classList.add('slide-in');
      }
    } else {
      for (let i = 0; i < slideLeft.length; i++) {
        slideLeft[i].classList.add('slide-out')
        slideLeft[i].classList.remove('slide-in');
      }
      for (let i = 0; i < slideRight.length; i++) {
        slideRight[i].classList.add('slide-out')
        slideRight[i].classList.remove('slide-in');
      }
    }

  }

}
