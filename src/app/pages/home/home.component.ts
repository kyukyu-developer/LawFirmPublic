import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccordionItems } from 'src/assets/data/accordion/accordion-menu';
import { FAQService } from 'src/app/services/faq.service';
import { ServiceGroup } from 'src/app/services/service.service';
import { Service } from 'src/app/DTO/service.dto';
import { environment } from 'src/environments/environment';
import * as Aos from 'aos';
import { trigger, transition, style, animate, state } from '@angular/animations';

export interface carouselItem {
  url?: string;
  title_1?: string;
  title_2?: string;
  description?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  //  carousel items array
  carouselData: carouselItem[] = [
    { url: '../../../assets/images/banner.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'Royal Law Firm', description: "At The Royal Law Firm, we are dedicated to providing unparalleled legal services with a commitment to excellence, integrity, and innovation. As a leading law firm, we pride ourselves on our passion for the law and our unwavering dedication to our clients." },
    { url: '../../../assets/images/cover_gas.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'Tharaphu Gas', description: "At Tharaphu Gas, we take immense pride in providing top-tier LPG gas solutions for all your needs. Whether you're a commercial enterprise, a wholesaler, or an individual looking for retail LPG solutions, we've got you covered." },
    { url: '../../../assets/images/cover_realestate.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'BCG Real Estate', description: "Welcome to Burma Consultancy Group Real Estate, your dedicated partners in the world of real estate." },
    { url: '../../../assets/images/cover_Institute.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'BCG Institute', description: "At BCG Institute, we are dedicated to empowering the youth of Myanmar through affordable, high-quality education in business, management, and career enhancement." },
    // Add more items as needed
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    navSpeed: 500,
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
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }

  homebanner: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 1000,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    animateOut: 'slideOutUp',
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
    nav: true
  };

  vision: boolean = false
  mission: boolean = true
  value: boolean = false

  currentYear: any = ''
  isOpen = false;
  serviceGroup: Service[] = []

  linkUrl: string = environment.linkUrl;
  defaultLoadingImage: string = environment.defaultLoadingImage;
  errorImage: string = environment.errorImage;

  window_scroll: number = window.scrollY;
  aboutusSectionScroll: number = 0;
  founderSectionScroll: number = 0;
  serviceSectionScroll: number = 0;

  slides = [
    { title: 'Slide 1', description: 'Description for Slide 1', image: '../../assets/images/banner.jpg' },
    { title: 'Slide 2', description: 'Description for Slide 2', image: '../../assets/images/banner.jpg' },
    // Add more slides as needed
  ];

  activeSlideIndex = 0;

  constructor(public shareService: SharedService, private Service: ServiceGroup) {
  }

  goRoute(route: string) {
    this.shareService.router.navigate(['/' + route])
  }

  ngOnInit(): void {
    Aos.init()
    this.getServiceGroup()
  }


  scroll(el: any) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  getServiceGroup() {
    this.Service.getServiceGroup().toPromise().then((response: any) => {
      this.serviceGroup = response;
      console.log(this.serviceGroup, 'data')
      //this.promotionData = data;
    })
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

  onSlideChanged(event: any): void {
    var homeSliderInfo = document.querySelectorAll('.home-slider-info-text');
    homeSliderInfo.forEach(async (sliderInfo, index) => {
      sliderInfo.classList.add('aos-animate');
      // Use 'await' to introduce a delay of 3 seconds
      await this.delay(4);
      sliderInfo.classList.remove('aos-animate');

    });
  }

  delay(seconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000); // Convert seconds to milliseconds
    });
  }







}


