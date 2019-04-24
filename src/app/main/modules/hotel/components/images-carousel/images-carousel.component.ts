import { Component, OnInit } from '@angular/core';
// import {$} from 'protractor';


@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss']
})
export class ImagesCarouselComponent implements OnInit {
   images = ['https://t-ec.bstatic.com/images/hotel/max1024x768/626/62687652.jpg',
  'https://t-ec.bstatic.com/images/hotel/max1024x768/626/62687642.jpg',
  'https://s-ec.bstatic.com/images/hotel/max1024x768/626/62687650.jpg',
  'https://s-ec.bstatic.com/images/hotel/max1024x768/626/62687659.jpg',
  'https://s-ec.bstatic.com/images/hotel/max1024x768/626/62687647.jpg',
  'https://t-ec.bstatic.com/images/hotel/max1280x900/626/62687644.jpg',
  'https://s-ec.bstatic.com/images/hotel/max1280x900/626/62687645.jpg',
  'https://t-ec.bstatic.com/images/hotel/max1280x900/626/62687646.jpg',
  'https://s-ec.bstatic.com/images/hotel/max1280x900/626/62687648.jpg'];
  thumbnails = [];

  constructor() { }

  ngOnInit() {
    let i;
    for (i = 0; i < this.images.length; i += 5) {
      this.thumbnails.push(this.images.slice(i, i + 5));
    }
  }

}
