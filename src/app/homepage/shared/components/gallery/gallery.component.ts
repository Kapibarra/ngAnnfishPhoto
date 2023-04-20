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
      src: 'assets/series/01/01.jpg',
      alt: 'Balancing Act',
      paddingRight: this.getRandomPadding(),
      id: 1,
      category: 'Fashion',
      gridColumn: '1 / 2', // occupies columns 1 and 2
      gridRow: '1 / 2', // occupies row 1
      seriesPhotos: [
        {
          src: 'assets/series/01/01.jpg',
        },
        {
          src: 'assets/series/01/02.jpg',
        },
        {
          src: 'assets/series/01/03.jpg',
        },
        {
          src: 'assets/series/01/04.jpg',
        },
        {
          src: 'assets/series/01/05.jpg',
        },
      ],
    },
    {
      src: 'assets/series/02/01.jpg',
      alt: 'Puck',
      paddingRight: this.getRandomPadding(),
      id: 2,
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/02/01.jpg',
        },
        {
          src: 'assets/series/02/02.jpg',
        },
        {
          src: 'assets/series/02/03.jpg',
        },
        {
          src: 'assets/series/02/04.jpg',
        },
        {
          src: 'assets/series/02/05.jpg',
        },
        {
          src: 'assets/series/02/06.jpg',
        },
        {
          src: 'assets/series/02/07.jpg',
        },
        {
          src: 'assets/series/02/08.jpg',
        },
        {
          src: 'assets/series/02/09.jpg',
        },
      ],
    },
    {
      src: 'assets/series/03/01.jpg',
      alt: 'Puck',
      paddingRight: this.getRandomPadding(),
      id: 3,
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/03/01.jpg',
        },
        {
          src: 'assets/series/03/02.jpg',
        },
        {
          src: 'assets/series/03/03.jpg',
        },
        {
          src: 'assets/series/03/04.jpg',
        },
        {
          src: 'assets/series/03/05.jpg',
        },
        {
          src: 'assets/series/03/06.jpg',
        },
        {
          src: 'assets/series/03/07.jpg',
        },
        {
          src: 'assets/series/03/08.jpg',
        },
      ],
    },
    {
      src: 'assets/series/04/01.jpg',
      alt: 'Puck',
      id: 4,
      paddingRight: this.getRandomPadding(),
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/04/01.jpg',
        },
        {
          src: 'assets/series/04/02.jpg',
        },
        {
          src: 'assets/series/04/03.jpg',
        },
        {
          src: 'assets/series/04/04.jpg',
        },
        {
          src: 'assets/series/04/05.jpg',
        },
      ],
    },
    {
      src: 'assets/series/05/01.jpg',
      alt: 'Puck',
      id: 5,
      paddingRight: this.getRandomPadding(),
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/05/01.jpg',
        },
        {
          src: 'assets/series/05/02.jpg',
        },
        {
          src: 'assets/series/05/03.jpg',
        },
        {
          src: 'assets/series/05/04.jpg',
        },
        {
          src: 'assets/series/05/05.jpg',
        },
      ],
    },
    {
      src: 'assets/series/06/01.jpg',
      alt: 'Puck',
      id: 6,
      paddingRight: this.getRandomPadding(),
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/06/01.jpg',
        },
        {
          src: 'assets/series/06/02.jpg',
        },
        {
          src: 'assets/series/06/03.jpg',
        },
        {
          src: 'assets/series/06/04.jpg',
        },
        {
          src: 'assets/series/06/05.jpg',
        },
      ],
    },
    {
      src: 'assets/series/07/01.jpg',
      alt: 'Puck',
      id: 7,
      paddingRight: this.getRandomPadding(),
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/07/01.jpg',
        },
        {
          src: 'assets/series/07/02.jpg',
        },
        {
          src: 'assets/series/07/03.jpg',
        },
        {
          src: 'assets/series/07/04.jpg',
        },
        {
          src: 'assets/series/07/05.jpg',
        },
        {
          src: 'assets/series/07/06.jpg',
        },
      ],
    },
  ];

  loading: boolean = true;
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
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      415: {
        slidesPerView: 2.1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.1,
        spaceBetween: 20,
      },
    },
  };
  loaded: boolean = false;
  constructor() {}

  selectedPhoto: any;

  onPhotoClick(photo: any) {
    this.selectedPhoto = photo;
    this.popupState = 'visible';
  }
  getRandomPadding(): string {
    if (window.innerWidth <= 1024) {
      return '0';
    }
    const top = Math.floor(Math.random() * 70) + 10;
    const right = Math.floor(Math.random() * 50) + 10;
    const bottom = Math.floor(Math.random() * 40) + 10;
    const left = Math.floor(Math.random() * 110) + 10;
    return `${top}px ${right}px ${bottom}px ${left}px`;
  }
  closePhotoPopup() {
    this.popupState = 'hidden';
    setTimeout(() => {
      this.selectedPhoto = null;
    }, 300);
  }
  onSelectedPhotoLoad() {
    this.loading = false;
    setTimeout(() => {
      this.loaded = true;
    }, 3000);
  }
  ngOnInit(): void {}
}
