

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicWebsiteRoutingModule } from './public-website-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { HomeComponent } from '../pages/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { PromotionComponent } from '../pages/promotion/promotion.component';
import { ProductComponent } from '../pages/product/product.component';
import { ProductDetailComponent } from '../pages/product-detail/product-detail.component';
import { PromotionDetailsComponent } from '../pages/promotion-details/promotion-details.component';
import { ModalComponent } from '../elements/modal/modal.component';
import { VideoSliderComponent } from '../elements/video-slider/video-slider.component';
import { PromotionCardComponent } from '../elements/promotion-card/promotion-card.component';
import { NewsEventsComponent } from '../pages/news-events/news-events.component';
import { NewDetailsComponent } from './../pages/new-details/new-details.component';
import { InnerNewComponent } from './../elements/inner-new/inner-new.component';
import { NewListComponent } from '../elements/new-list/new-list.component';
import { AboutComponent } from '../pages/about/about.component';
import { ServicesComponent } from '../pages/services/services.component';
import { SliderComponent } from '../pages/slider/slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    PromotionComponent,
    PromotionDetailsComponent,
    ProductComponent,
    ProductDetailComponent,
    ModalComponent,
    VideoSliderComponent,
    PromotionCardComponent,
    NewsEventsComponent,
    NewDetailsComponent,
    InnerNewComponent,
    NewListComponent,
    AboutComponent,
    ServicesComponent,
    SliderComponent

  ],
  imports: [
    CommonModule,
    PublicWebsiteRoutingModule,
    SharedModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],

})
export class PublicWebsiteModule { }
