import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('popupAnimation', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
  ],
})
export class GalleryComponent implements OnInit {
  photos = [
    {
      src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
      alt: 'Balancing Act',
      id: 1,
      category: 'Fashion',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '1 / 2', // occupies row 1
      seriesPhotos: [
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
      ],
    },
    {
      src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-5-1050x750.jpg',
      alt: 'Puck',
      id: 2,
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
        {
          src: 'https://anoukhart.com/wp-content/uploads/2023/03/Anouk_Hart-1-560x700.jpg',
        },
      ],
    },
  ];
  gridRows: any;
  popupState: string = 'hidden';
  gridColumns: any;
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    navigation: false,
    pagination: { clickable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  constructor() {}

  selectedPhoto: any; // holds data for the currently selected photo

  onPhotoClick(photo: any) {
    this.selectedPhoto = photo;
    this.popupState = 'visible';
  }

  closePhotoPopup() {
    this.popupState = 'hidden';
    setTimeout(() => {
      this.selectedPhoto = null;
    }, 300);
  }
  ngOnInit(): void {}
}
