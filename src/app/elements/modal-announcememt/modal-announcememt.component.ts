import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/shared.service';


declare var $: any;

@Component({
  selector: 'app-modal-announcememt',
  templateUrl: './modal-announcememt.component.html',
  styleUrls: ['./modal-announcememt.component.scss']
})
export class ModalAnnouncememtComponent implements OnInit {
  @Input() showModal!: boolean;

  constructor(public shareService: SharedService) { }

  hideModal() {
    this.showModal = false;
  }
  ngOnInit(): void {

  }

}
