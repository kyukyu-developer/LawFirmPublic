import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  routeLink: string = "";
  @Input()
  newlists: any = '';
  defaultLoadingImage: string = environment.defaultLoadingImage;
  errorImage: string = environment.errorImage;
  CoverPhotoURL!: string;
  title!: string;
  postID!: string;

  coverphoto: any = '';

  linkUrl: string = environment.linkUrl

  @Input() related: boolean = false

  constructor(public shareService: SharedService ) { }

  ngOnInit(): void {
    this.coverphoto = this.newlists?.CoverPhotoURL
    // console.log(this.promotionData, 'promotionData')
  }




}
