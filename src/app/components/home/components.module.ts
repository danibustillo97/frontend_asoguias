import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {CarouselComponent} from './carousel/carousel.component';


@NgModule({
  declarations: [
    AboutComponent,
    CarouselComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [
    AboutComponent,
    CarouselComponent
  ]
})
export class ComponentsModule { }
