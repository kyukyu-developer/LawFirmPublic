import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceGroup } from 'src/app/services/service.service';
import { SectionLists, ServiceDetail } from 'src/app/DTO/service.dto';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, AfterViewInit {
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

  constructor(
    private active_route: ActivatedRoute,
    private service: ServiceGroup
  ) { }

  ngAfterViewInit() {

    this.active_route.paramMap.subscribe((params) => {
      const newServiceId = params.get('id');
      // if (this.activeroute !== newServiceId) {
      //   console.log(this.activeroute, 'activeroute')

      // }ss
      this.activeroute = newServiceId;
      this.service
        .getSingleService(this.activeroute)
        .toPromise()
        .then((response: any) => {
          this.servicegroup = response;
          console.log(this.servicegroup, 'data');

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
        });

      this.service.getServiceGroup().toPromise().then((response: any) => {
        this.allservice = response;
        for (let i = 0; i < this.allservice.length; i++) {
          if (this.activeroute == this.allservice[i].id) {
            this.servicePageTitle = this.allservice[i].title_en
          }
        }

        console.log(this.allservice, 'alldata')
      })
    });

    // this.getServiceGroup(this.activeroute)


  }

  ngOnInit(): void {
  }

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

  getDetails(getid: any, getsubid: any) {
    const index = this.idList.findIndex(id => id.startsWith(getid + "-"));
    if (index !== -1) {
      // Value found in the array, update it
      this.idList[index] = getid + '-' + getsubid;
    }
  }

}
