import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MenuItems } from 'src/assets/data/detail/detail';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  id:number=1
  logoImage:string=''
  productImage:string=''
  menuItems: any[]= MenuItems
  currentId: number = 0
  title: string = ''
  currentIndex: number = -1

  selectedImage: any;
  constructor(private route: ActivatedRoute,private title_:Title) {
  }
  ngOnInit(): void {
    // this.title_.setTitle('Product Details | Galluac of Companies');
    //
    // this.route.paramMap.subscribe((params:ParamMap)=> {
    //  this.currentId += (Number(params.get('id')))
   // });
  
  // });

}
}
