import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { NewService } from 'src/app/services/new.service';
@Component({
  selector: 'app-inner-new',
  templateUrl: './inner-new.component.html',
  styleUrls: ['./inner-new.component.scss']
})
export class InnerNewComponent implements OnInit {

  routeLink: string = "";
  @Input()
 
  imageURL!: string;
  title!: string;
  postID!: string;
  
  currentId: number = 0
  
  @Input()newlists:any=[]
 
  defaultLoadingImage: string = environment.defaultLoadingImage;
  errorImage: string = environment.errorImage;
  CoverPhotoURL!: string;
  
  coverphoto: any = '';

  linkUrl: string = environment.linkUrl

  @Input() related: boolean = false
  constructor(private router: Router,public shareService: SharedService, private newService: NewService) { }

  

  ngOnInit(): void {
     this.coverphoto = this.newlists?.CoverPhotoURL;
  }
}
