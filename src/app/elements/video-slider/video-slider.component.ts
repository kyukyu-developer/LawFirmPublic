import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { VideoData } from 'src/assets/data/video/videoData';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss']
})
export class VideoSliderComponent implements OnInit {

  constructor(private shareService: SharedService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
    navSpeed: 600,
    // navText: ['&#8249', '&#8250;'],
    navText: [

    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false
  }

  activeSlideIndex: number = 0;
  videoData: any = VideoData
  selectedVideo: any = ''
  fullVideo: boolean = false

  ngOnInit(): void {
  }


  loadIframe() {
    // this.shareService.loadingStart()
    // alert('load')
  }

  playVideo(linkUrl: string) {
    this.selectedVideo = linkUrl
    this.fullVideo = true
  }

  closeVideo() {
    this.selectedVideo = ''
    this.fullVideo = false
  }

}
