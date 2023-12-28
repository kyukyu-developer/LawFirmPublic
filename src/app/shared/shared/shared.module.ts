import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../elements/nav-bar/nav-bar.component';
import { FooterComponent } from '../elements/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalAnnouncememtComponent } from 'src/app/elements/modal-announcememt/modal-announcememt.component';
import { SafePipe } from 'src/app/pipe/safe.pipe';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    ModalAnnouncememtComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    ModalAnnouncememtComponent,
    TranslateModule,
    SafePipe
  ]
})
export class SharedModule { }
