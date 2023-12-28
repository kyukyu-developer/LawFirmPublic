import { Component, OnInit,Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as Aos from 'aos';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.scss']
})
export class NewsEventsComponent implements OnInit {

  currentId: string = '0'
  title: string = ''
  id: number = 1;
  currentIndex: number = -1
  routeLink: string = "";
  imageURL!: string;
  @Input()
  postID!: string;
  newlists = [];

  loading: boolean = false
  

  constructor(private route: ActivatedRoute, public share_: SharedService, private newService: NewService) { }

  ngOnInit(): void {
    Aos.init(
      {
        duration: 1200,
      }
    );
    this.getAllNews()


  }

  

  getAllNews() {
    this.share_.loadingStart()
    let param = {
      RequestID: '1'
    }
    this.newService.getAllNews(param).toPromise().then((response: any) => {
      let data = JSON.parse(response.d);
      // let allitems = JSON.parse(data.ResponseData)
      // console.log(allitems, 'alliteems___')

      this.newlists = data;

      console.log(data, 'newlist')
      this.share_.loadingEnd()

    }).catch(error => {

      this.share_.loadingEnd()
    })
  }




}   
