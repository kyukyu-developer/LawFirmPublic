import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HtmlTagDefinition } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiServer = environment.apiServer
  announcementModal: boolean = false
  surveyModal: boolean = false
  currentLanguage: string = ''
  loading: boolean = false



  accordionItems: any = []
  promotionData: any = []
  newlists :any=[]

  constructor(
    public translate: TranslateService,
    public httpClient: HttpClient,
    public toastrService: ToastrService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
  }

  public switchLanguage(language: string) {
    this.loadingStart()

    this.translate.use(language);
    this.currentLanguage = language
    localStorage.setItem("language", language);
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.loadingEnd()
    }, 1000);
  }

  public getRequestWithParams(url: string, params: HttpParams) {
    return this.httpClient.get(this.apiServer + url, { params: params });
  }

  public getRequest(url: string) {
    return this.httpClient.get(this.apiServer + url);
  }

  public postRequest(url: string, data: any) {
    return this.httpClient.post(this.apiServer + url, data)
  }

  public postRequestParam(url: string) {
    return this.httpClient.post(this.apiServer + url, null)
  }

  public putRequest(url: string, data: any) {
    return this.httpClient.put(this.apiServer + url, data)
  }

  public putRequestParam(url: string) {
    return this.httpClient.put(this.apiServer + url, null)
  }

  public deleteRequest(url: string, data: any) {
    return this.httpClient.delete(this.apiServer + url, data)
  }

  public deleteRequestParam(url: string) {
    return this.httpClient.delete(this.apiServer + url)
  }

  loadingStart() {
    let html = document.getElementsByTagName("html")[0]
    html.style.overflow = 'hidden'
    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = 'hidden'
    this.loading = true
  }


  loadingEnd() {
    let html = document.getElementsByTagName("html")[0]
    html.style.overflow = 'unset'
    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = 'unset'
    this.loading = false
  }



  // openAnnouncement() {
  //   // this.surveyModal = false
  //   this.announcementModal = true;
  //   let html = document.getElementsByTagName("html")[0]
  //   html.style.overflow = 'hidden'
  //   let body = document.getElementsByTagName("body")[0]
  //   body.style.overflow = 'hidden'
  // }

  closeAnnouncement() {
    this.announcementModal = false
    let html = document.getElementsByTagName("html")[0]
    html.style.overflow = 'auto'
    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = 'unset'
  }

  openSurvey() {
    this.surveyModal = true;
    // this.announcementModal = false;
    let html = document.getElementsByTagName("html")[0]
    html.style.overflow = 'hidden'
    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = 'hidden'
  }

  closeSurvey() {
    this.surveyModal = false
    let html = document.getElementsByTagName("html")[0]
    html.style.overflow = 'auto'
    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = 'unset'
  }



  DateChange(dateCode: any) {
    if (dateCode != null) {
      let newDate = dateCode;

      let now = new Date(newDate).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      return now;
    } else {
      return ''
    }
  }


  DateChange2(dateCode: any) {
    if (dateCode != null) {
      let newDate = dateCode;

      let splitDate = String(newDate).split('(')[1]
      let finalDate = splitDate?.substring(0, splitDate.length - 2)

      let date_ = new Date(Number(finalDate))

      let now = new Date(date_).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      return now;
    } else {
      return ''
    }
  }


}
