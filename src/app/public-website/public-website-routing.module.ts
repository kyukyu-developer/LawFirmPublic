import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { PromotionComponent } from '../pages/promotion/promotion.component';
import { ProductComponent } from '../pages/product/product.component';
import { ProductDetailComponent } from '../pages/product-detail/product-detail.component';
import { PromotionDetailsComponent } from '../pages/promotion-details/promotion-details.component';
import { NewsEventsComponent } from '../pages/news-events/news-events.component';
import { NewDetailsComponent } from '../pages/new-details/new-details.component';
import { AboutComponent } from '../pages/about/about.component';
import { ServicesComponent } from '../pages/services/services.component';
import { PackageComponent } from '../package/package.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'service-detail/:id',
    component: ServicesComponent
  },
  {
    path: 'packages',
    component: PackageComponent
  },
  {
    path: 'promotion',
    component: PromotionComponent
  },
  {
    path: 'promotion-detail/:id',
    component: PromotionDetailsComponent
  },
   {
     path: 'news',
     component: NewsEventsComponent
   },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
   {
    path: 'news-detail/:id',
     component: NewDetailsComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicWebsiteRoutingModule { }
