import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './shared/httpconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './shared/shared/shared.module';
import { PublicWebsiteModule } from './public-website/public-website.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderMenuComponent } from './slider-menu/slider-menu.component';
import { PromotionCardComponent } from './elements/promotion-card/promotion-card.component';
import { LoadingComponent } from './shared/elements/loading/loading.component';
import { ChatComponent } from './elements/chat/chat.component';
import { ImageSliderComponent } from './elements/image-slider/image-slider.component';
import { PackageComponent } from './package/package.component';
import { Router, RouterModule } from '@angular/router';
import { FaqSectionComponent } from './elements/faq-section/faq-section.component';
import { CustomSliderComponent } from './pages/custom-slider/custom-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/data/languages/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SliderMenuComponent,
    LoadingComponent,
    ChatComponent,
    ImageSliderComponent,
    PackageComponent,
    FaqSectionComponent,
    PackageComponent,

  ],
  imports: [
    CarouselModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "en"
    }),
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
