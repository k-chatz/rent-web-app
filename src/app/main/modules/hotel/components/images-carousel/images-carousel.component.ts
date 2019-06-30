import {Component, Input, OnInit} from '@angular/core';
import {File} from '../../../../../shared/models/file';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss']
})
export class ImagesCarouselComponent implements OnInit {
  @Input() images: Array<File>;
  thumbnails = [];
  currentSlide = 0;
  totalSlides = 0;
  maxThumbnails = 6;

  changeSlide(slide) {
    this.currentSlide = slide;
  }

  slideNext() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide += 1;
    } else {
      this.currentSlide = 0;
    }
  }

  slidePrevious() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
    } else {
      this.currentSlide = this.totalSlides - 1;
    }
  }

  constructor() {
  }

  ngOnInit() {
    let i;
    for (i = 0; i < this.images.length; i += this.maxThumbnails) {
      this.thumbnails.push(this.images.slice(i, i + this.maxThumbnails));
    }
    this.totalSlides = this.images.length;
  }

}
