import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MenuItems } from 'src/assets/data/detail/detail';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  menuItems: any[] = MenuItems
  showNutrients = true;
  showTable = true;
  id: number = 1
  currentId: number = 0
  title: string = ''
  currentIndex: number = -1


  selectedImage: any;
  constructor(private route: ActivatedRoute, private title_: Title) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentId = (Number(params.get('id')) - 1)
      this.id = this.currentId === 0 ? 1 : -1;
    this.showTable = this.currentId === 0;
    });

  }

  goToLink(link: string) {
    window.open(link, '_blank')
  }
}