import { Component, Input, OnInit, ElementRef, HostListener, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { DOCUMENT } from '@angular/common';
// import { LanguageList } from 'src/assets/data/config/language-config';
// import { Language } from '../../../public_website/DTO/config/language-config.dto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Menu } from '../../../DTO/config/menu.dto';
import { MenuList } from '../../../../assets/data/menu/menu';
import { environment } from 'src/environments/environment';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { HtmlParser } from '@angular/compiler';
import { ServiceGroup } from 'src/app/services/service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  dropmenu:boolean = false
  routeLink: string = "";
  activeLanguageMenu: boolean = true;
  sidebar: boolean = false;
  account: boolean = false;
  innerWidth = window.innerWidth
  menuList: any = MenuList;
  private element: any;
  apiServer = environment.apiServer
  navWhite: boolean = false
  scroll: number = 0
  dropdown_one: boolean = false;
  serviceGroup: any

  language: string = ''
  languages: any = ['en', 'mm']
  constructor(@Inject(DOCUMENT) private _document: Document, public _shared: SharedService, private router: Router, private activeRoute: ActivatedRoute, private location: Location, private el: ElementRef, private Service : ServiceGroup) {
    this.element = el.nativeElement;

  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: any) {
    var prevScrollpos = window.pageYOffset;
    var logo = document.getElementById('logo') as HTMLElement
    let mainNav = document.getElementById('mainNav') as HTMLElement

    if (window.screen.width > 768) {

        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 80) {
          mainNav.classList.remove('navWhite')
          logo.setAttribute('src', 'assets/images/logo-.png')
        } else {
          mainNav.classList.add('navWhite')
          logo.setAttribute('src', 'assets/images/logo-.png')
        }
        prevScrollpos = currentScrollPos;

      
    } else {
      mainNav.classList.add('navWhite')
    }
  }



  goSection(route: any) {
    const element = document.getElementById(route) as HTMLElement;
    element.scrollIntoView();
    this.closeSideBar();
  }

  showdrop(){
    this.dropmenu = !this.dropmenu
  }


  showSideBar() {
    this.sidebar = !this.sidebar;
    if (this.innerWidth <= 768) {
      document.body.classList.add('style-modal-open');
    }
  }

  closeSideBar() {
    this.sidebar = false;
    document.body.classList.remove('style-modal-open');
  }

  goToAdmin() {
    if (this.innerWidth <= 768) {
      this._shared.router.navigate(['/admin']);
      this.closeSideBar();
    }
  }

  switchLanguage(language: string) {
    this._shared.switchLanguage(language)
    this.language = language
  }


  showLanguage() {
    let box = document.getElementById('box-container') as HTMLElement

    if (box.style.display == 'block') {
      box.style.display = "none"
      this.closeSideBar();
      window.scroll(0, 0);
    } else {
      box.style.display = "block"
    }


  }


  ngOnInit(): void {
  

    this.language = 'mm'
    // if (localStorage.getItem('language')) {
    //   if (localStorage.getItem('language') == 'mm') {
    //     this.language = 'mm'
    //   } else {
    //     this.language = 'en'
    //   }
    // } else {
    //   this.language = 'mm'
    // }

    this._shared.switchLanguage(this.language)



    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
      if (el.target.className.includes('nav-sidebar-background')) {
        this.closeSideBar();
      }
    });
    if (this.innerWidth < 768) {
      this.closeSideBar();
    }
    this.getServiceGroup()
  }




  navigate(route: any, param: any) {
    if (param == '') {
      this.router.navigate(['/' + route])
    } else {
      this.router.navigate(
        ['/' + route],
        { queryParams: { saletype: param } }
      );
    }
    this._shared.surveyModal = false;
    this._shared.announcementModal = false;
    this.closeSideBar();
  }

  goRoute(route: number) {
    // this._shared.loadingStart()
    //  setTimeout(() => {                           // <<<---using ()=> syntax
    //     this._shared.loadingEnd()
    //   }, 2000);
      //this.refresh()
    this.router.navigate(['/service-detail' , route])
  }

  refresh():void {
    this._document.defaultView?.location.reload()
  }

  ngAfterContentChecked() {

    this.routeLink = this.location.path();

  }

  showLanguageMenu() {

  }

  setLanguage(lan: any) {

  }

  showDropDownOne() {
    this.dropdown_one = !this.dropdown_one;
  }

  getServiceGroup(){
    this.Service.getServiceGroup().toPromise().then((response: any) => {
          this.serviceGroup = response;
          console.log(this.serviceGroup, 'servicedata')
          //this.promotionData = data;
        })
  }

}

