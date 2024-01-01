import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  vision: boolean = true
  mission: boolean = false
  value: boolean = false
  aboutinfo: any
  member: any

  linkUrl: string = environment.linkUrl
  defaultLoadingImage: string = environment.defaultLoadingImage;
  errorImage: string = environment.errorImage;

  window_scroll: number = window.scrollY;
  aboutusSectionScroll: number = 0;
  founderSectionScroll: number = 0;
  serviceSectionScroll: number = 0;


  constructor(public about: GeneralService) { }

  ngOnInit(): void {
    Aos.init()
    this.getAllAbout()
    this.getMembers()

    let aboutusSection = document.getElementById("aboutus-section") as HTMLHtmlElement;
    let founderSection = document.getElementById("founder-section") as HTMLHtmlElement;
    let serviceSection = document.getElementById("service-section") as HTMLHtmlElement;


    // Add the onscroll event listener to the window
    window.onscroll = (event: Event) => {
      this.window_scroll = window.scrollY;
      this.aboutusSectionScroll = 200;// aboutusSection.scrollTop;
      this.founderSectionScroll = 1000;//founderSection.scrollTop;
      this.serviceSectionScroll = 1200;

      if (this.window_scroll >= this.aboutusSectionScroll && this.window_scroll < this.founderSectionScroll) {
        this.slideLeftRight("aboutus-section", this.aboutusSectionScroll);
      }
      else if (this.window_scroll >= this.founderSectionScroll && this.window_scroll < this.serviceSectionScroll) {
        this.slideLeftRight("founder-section", this.founderSectionScroll);
      }
      else if (this.window_scroll >= this.founderSectionScroll) {
        this.slideDownUp("service-section", this.serviceSectionScroll);
      }
      else {
        this.slideLeftRight("aboutus-section", this.aboutusSectionScroll);
        this.slideLeftRight("founder-section", this.founderSectionScroll);
        this.slideLeftRight("service-section", this.founderSectionScroll);
      }
    }

  }

  slideLeftRight(sectionName: string, threshold: number) {
    const scroll: number = window.scrollY;
    let slideLeft = document.getElementById(sectionName + '-slide-left') as HTMLHtmlElement;
    let slideRight = document.getElementById(sectionName + '-slide-right') as HTMLHtmlElement;
    // Add or remove classes based on scroll position
    if (scroll > threshold) {
      slideLeft.classList.remove('slide-out')
      slideLeft.classList.add('slide-in');

      slideRight.classList.remove('slide-out')
      slideRight.classList.add('slide-in');

    } else {
      slideLeft.classList.add('slide-out')
      slideLeft.classList.remove('slide-in');

      slideRight.classList.add('slide-out')
      slideRight.classList.remove('slide-in');
    }
  }

  slideDownUp(sectionName: string, threshold: number) {
    const scroll: number = window.scrollY;
    let slideDown = document.getElementById(sectionName + '-slide-down') as HTMLHtmlElement;
    // Add or remove classes based on scroll position
    if (scroll > threshold) {
      slideDown.classList.remove('slide-out')
      slideDown.classList.add('slide-in');

    } else {
      slideDown.classList.add('slide-out')
      slideDown.classList.remove('slide-in');
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: false,
    dots: true,
    navSpeed: 600,
    margin: 10,
    // navText: ['&#8249', '&#8250;'],
    navText: [
      '<img src="assets/images/is-less-than.png" width="40px" alt="">',
      ' <img src="assets/images/is-greater-than.png" width="40px" alt="">'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    nav: false
  }

  tabClick(param: any) {
    if (param == 'vision') {
      this.vision = true
      this.mission = false
      this.value = false
    }
    if (param == 'mission') {
      this.mission = true
      this.value = false
      this.vision = false
    }
    if (param == 'value') {
      this.value = true
      this.vision = false
      this.mission = false
    }
  }

  getAllAbout() {
    this.about.getAboutUs().toPromise().then((response: any) => {
      this.aboutinfo = response;
      console.log(response, 'data')
    })
  }

  getMembers() {
    this.about.getMembers().toPromise().then((response: any) => {
      this.member = response;
      console.log(response, 'member')
    })
  }


}
