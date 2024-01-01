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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @Input() title!: string;
  // @Input() content!: string;
  // hide: boolean = false
  // accordionItems: any = []
  // submitted = false;
  // loading = false
  // promotionData: any = []

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

  constructor(public shareService: SharedService, private Service: ServiceGroup) {
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
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
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }

  homebanner: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 1000,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
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

    const paragraphs = document.querySelectorAll('.fade-in-paragraph');

    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        paragraph.classList.add('opacity');//= '1';
      }, index * 1000); // Adjust the delay as needed
    });

    let aboutusSection = document.getElementById("aboutus-section") as HTMLHtmlElement;
    let founderSection = document.getElementById("founder-section") as HTMLHtmlElement;
    let serviceSection = document.getElementById("service-section") as HTMLHtmlElement;


    // Add the onscroll event listener to the window
    window.onscroll = (event: Event) => {
      this.window_scroll = window.scrollY;
      this.aboutusSectionScroll = 200;// aboutusSection.scrollTop;
      this.founderSectionScroll = 1000;//founderSection.scrollTop;
      this.serviceSectionScroll = 1200;
      console.log(this.window_scroll, "scroll");
      console.log(this.aboutusSectionScroll, "aboutusSectionScroll");
      console.log(this.founderSectionScroll, "founderSectionScroll");

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







}


