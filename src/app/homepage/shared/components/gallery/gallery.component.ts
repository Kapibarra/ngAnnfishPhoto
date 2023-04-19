import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
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
  }

  closePhotoPopup() {
    this.selectedPhoto = null;
  }
  ngOnInit(): void {}
}
