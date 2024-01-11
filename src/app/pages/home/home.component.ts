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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  //  carousel items array
  carouselItems = [
    { url: '../../../assets/images/banner.jpg', title_1: 'LEGAL EXPERTS', title_2: 'Focused on Client Based Law Firm', description: " Focused on Client Based Law Firm',description : ' At Burma Consultancy Group, our mission is to deliver exceptional legal counsel and representation with unwavering dedication to our clients' success. " },
    { url: '../../../assets/images/cover_gas.jpg', title_1: 'LEGAL EXPERTS', title_2: 'Item 1', description: '' },
    { url: '../../../assets/images/cover_realestate.jpg', title_1: 'LEGAL EXPERTS', title_2: 'Item 1', description: '' },
    { url: '../../../assets/images/cover_Institute.jpg', title_1: 'LEGAL EXPERTS', title_2: 'Item 1', description: '' },
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

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  goRoute(route: string) {
    this.shareService.router.navigate(['/' + route])
  }


  goSection(route: any) {
    const element = document.getElementById(route) as HTMLElement;
    element.scrollIntoView();
  }


  ngOnInit(): void {
    Aos.init()
    this.getServiceGroup()
  }


  getCurrentYear() {
    let date = new Date()
    this.currentYear = date.getFullYear()
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


