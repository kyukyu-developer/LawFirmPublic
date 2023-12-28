import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewService } from 'src/app/services/new.service';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss']
})
export class NewDetailsComponent implements OnInit {
  @Input() new_image: any;
  newlists: any = []
  active_route: any = ''
  currentIndex: number = -1
  modelImage: any;
  routeLink: string = "";
  linkAddress: string = '';
  currentId: string = ''
  imageURL!: string;
  title!: string;

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
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


  @Input() newimgList: any = []
  linkUrl: any = environment.linkUrl
  postOn: string = ''
  expireOn: string = ''
  currentImageIndex: number = 0
  singleNewData: any = {};

  constructor(private route: ActivatedRoute,private router: Router,public shareService: SharedService, private newService: NewService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentId = String(params.get('id'))
      //alert(this.currentId)
      this.getSingleNews(this.currentId)
      // let body = document.getElementsByTagName("body")[0]
      // body.style.overflow = 'unset';
      window.scrollTo(0, 0)
    });
    // this.route.paramMap.subscribe(params => {
    //  this.currentId = String(Number(params.get('id')) + 1)
    //  alert(this.currentId)
    //  this.getSingleNews(this.currentId)
    // });

    // this.route.params.subscribe((params) => {
    //   this.active_route = params['id'];
    //   this.getSingleNews(this.active_route)
      
    
  }
  getSingleNews(postId: string) {
    let param = {
      post_id: postId
    }

    this.newService.getSingleNews(param).toPromise().then((response: any) => {
      //console.log(response.d, 'newdetaildata');
      this.singleNewData = response.d.newDetailRecord;
      this.newimgList = response.d.ImageList
      this.postOn = this.singleNewData?.PostOn
      this.expireOn = this.singleNewData?.PostExpire
      this.newlists= JSON.parse(response.d.LatestNewList)
      // console.log(this.newlists, 'newlists')
      //  console.log(this.singleNewData, 'single news')
      window.scrollTo(0, 0)
    })



}
imgClick(index: number) {
  this.currentImageIndex = index
}
}
