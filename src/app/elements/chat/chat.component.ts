import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: '<div id="chatFuelContainer"></div>',
})
export class ChatComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const script = document.createElement('script');
    script.id = 'chatFuelScript';
    script.src = 'https://dashboard.chatfuel.com/integration/entry-point.js';
    script.async = true;
    script.defer = true;
    this.el.nativeElement.querySelector('#chatFuelContainer').appendChild(script);
  }
}
