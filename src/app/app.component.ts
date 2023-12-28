
import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared/shared/shared.service';
import { Location } from '@angular/common';
import * as AOS from "aos";
import { FAQService } from './services/faq.service';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  announcementShow: boolean = false

  // @ViewChild(ModalAnnouncememtComponent) autoOpenModal: ModalAnnouncememtComponent;
  isShow?: boolean;
  topPosToStartShowing = 100;
  title = 'LawFirm';
  defaultLanguage: string = environment.defaultLanguage;
  routeLink: string = "";
  @HostListener('window:scroll')
  checkScroll() {


    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;



    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  randomNumber: number = 0

  constructor(
    public shared_: SharedService,
    private location: Location,
    private FAQService: FAQService,
    private newService:NewService
  ) {

    //this.initialLoad();

  }


  ngAfterContentChecked() {
    this.routeLink = this.location.path();

  }


  initialLoad() {

    
    AOS.init();
  }


  getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }


  onActivate(event: any) {
    window.scroll(0, 0);
    // this.randomNumber = this.getRandomInt(10)
    // if (this.randomNumber == 2) {
    //   this.shared_.openSurvey()
    // }
  }

  ngOnInit() {
    // const script = document.createElement('script');
    // script.id = '64e87706cd6c5433487aa722';
    // script.src = 'https://dashboard.chatfuel.com/integration/entry-point.js';
    // script.async = true;
    // script.defer = true;
    // document.head.appendChild(script);
  }


  getAllFAQ() {
    this.shared_.loadingStart()
    let param = {
      RequestID: '1'
    }

    this.FAQService.getAllFAQ(param).toPromise().then((response: any) => {
      let data = JSON.parse(response.d);
      this.shared_.accordionItems = data;
      // setTimeout(() => {                           // <<<---using ()=> syntax
      //   this.shared_.loadingEnd()
      //   this.shared_.openAnnouncement()
      // }, 2000);

    })
  }


  
  

}
