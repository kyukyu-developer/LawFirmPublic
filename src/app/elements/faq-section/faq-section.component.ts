import { Component, OnInit,Input} from '@angular/core';
import { AccordionItems } from 'src/assets/data/accordion/accordion-menu';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnInit {
  
  accordionItems: any = []
  @Input() title!: string;
  isOpen = false;
 

  constructor() { }
  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
