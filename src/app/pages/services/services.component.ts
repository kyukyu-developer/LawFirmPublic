import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceGroup } from 'src/app/services/service.service';
import { SectionLists, ServiceDetail } from 'src/app/DTO/service.dto';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import * as Aos from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  //idList: string[] = ["29-29", "14-15"];
  idList: string[] = [];
  activeroute: any;
  servicelist_!: ServiceGroup;
  servicegroup: ServiceDetail[] = [];
  serviceList: any;
  serviceList_title: any = '';
  serviceList_des: any;

  linkUrl: string = environment.linkUrl;
  defaultLoadingImage: string = environment.defaultLoadingImage;
  errorImage: string = environment.errorImage;

  horizontalSections: any;
  verticalSections: any
  selectedTab: any;

  allservice: any
  servicePageTitle: any

  selectedList: any = 0
  selectedProduct: any;

  verticallist_one: any
  verticallist_two: any

  slide: any = {};

  coverBanners: any

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    navSpeed: 600,
    margin: 10,
    navText: [
      '<img src="assets/images/is-less-than.png" width="40px" alt="">',
      ' <img src="assets/images/is-greater-than.png" width="40px" alt="">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: false,
  };

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

  private subscription: Subscription | undefined;

  constructor(
    private active_route: ActivatedRoute,
    private service: ServiceGroup
  ) { }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    // Ensure to unsubscribe from any subscriptions or perform cleanup tasks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Other cleanup tasks can go here
  }

  ngOnInit(): void {
    Aos.init();

    this.active_route.paramMap.subscribe((params) => {
      const newServiceId = params.get('id');
      this.activeroute = newServiceId;
      this.service
        .getSingleService(this.activeroute)
        .toPromise()
        .then((response: any) => {
          this.servicegroup = response;
          console.log(this.servicegroup, 'data');

          this.coverBanners = this.servicegroup.filter((banner) => banner.section_type === "Cover Banner");

          this.setDefaultTabData();
          this.changeCover();
        });
    });
  }

  delay(seconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000); // Convert seconds to milliseconds
    });
  }

  getDetails(getid: any, getsubid: any) {
    const index = this.idList.findIndex(id => id.startsWith(getid + "-"));
    if (index !== -1) {
      // Value found in the array, update it
      this.idList[index] = getid + '-' + getsubid;
    }
  }

  changeCover() {
    this.service.getServiceGroup().subscribe(response => {
      // Do something with the data
      this.allservice = response;

      var homeSliderInfo = document.querySelectorAll('.home-slider-info-text');
      homeSliderInfo.forEach(async (sliderInfo, index) => {
        sliderInfo.classList.add("hide-sliderInfo");
        sliderInfo.classList.remove('aos-animate');
        // Use 'await' to introduce a delay of 3 seconds
        await this.delay(0.05);
        sliderInfo.classList.remove("hide-sliderInfo");
        await this.delay(0.5);
        sliderInfo.classList.add('aos-animate');

      });

      for (let i = 0; i < this.allservice.length; i++) {
        if (this.activeroute == this.allservice[i].id) {
          this.servicePageTitle = this.allservice[i].title_en
          if (this.servicePageTitle.includes("Law Firm")) {
            this.slide = { url: '../../../assets/images/banner.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'Royal Law Firm', description: "At The Royal Law Firm, we are dedicated to providing unparalleled legal services with a commitment to excellence, integrity, and innovation. As a leading law firm, we pride ourselves on our passion for the law and our unwavering dedication to our clients." }
          }
          if (this.servicePageTitle.includes("Gas")) {
            this.slide = { url: '../../../assets/images/cover_gas.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'Tharaphu Gas', description: "At Tharaphu Gas, we take immense pride in providing top-tier LPG gas solutions for all your needs. Whether you're a commercial enterprise, a wholesaler, or an individual looking for retail LPG solutions, we've got you covered." }
          }
          if (this.servicePageTitle.includes("Real Estate")) {
            this.slide = { url: '../../../assets/images/cover_realestate.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'BCG Real Estate', description: "Welcome to Burma Consultancy Group Real Estate, your dedicated partners in the world of real estate." }
          }
          if (this.servicePageTitle.includes("Institute")) {
            this.slide = { url: '../../../assets/images/cover_Institute.jpg', title_1: 'BURMA CONSULTANCY GROUP', title_2: 'BCG Institute', description: "At BCG Institute, we are dedicated to empowering the youth of Myanmar through affordable, high-quality education in business, management, and career enhancement." }
          }
        }

      }

      console.log(this.allservice, 'alldata')
    });
  }

  setDefaultTabData() {
    this.idList = [];

    this.servicegroup.find(element => {
      if (element.section_type === 'Section Tab - Vertical') {
        if (element.sectionlists != null) {
          this.idList.push(element.id + '-' + element.sectionlists[0].id);
        }

      }
      if (element.section_type === 'Section Tab - Horizontal') {
        if (element.sectionlists != null) {
          this.idList.push(element.id + '-' + element.sectionlists[0].id);
        }
      }

    });

    let list = this.servicegroup.filter(
      (section) => section.section_type === 'Section Tab - Vertical'
    );
    console.log(list, 'verticallist');
    let getList = list[0].sectionlists[0];
    this.serviceList_title = getList.title;
    this.serviceList_des = getList.description;
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


}
