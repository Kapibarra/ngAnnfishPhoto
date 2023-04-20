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
    {
      src: 'assets/series/08/01.jpg',
      alt: 'Puck',
      id: 8,
      paddingRight: this.getRandomPadding(),
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/08/01.jpg',
        },
        {
          src: 'assets/series/08/02.jpg',
        },
        {
          src: 'assets/series/08/03.jpg',
        },
        {
          src: 'assets/series/08/04.jpg',
        },
        {
          src: 'assets/series/08/05.jpg',
        },
        {
          src: 'assets/series/08/06.jpg',
        },
        {
          src: 'assets/series/08/07.jpg',
        },
        {
          src: 'assets/series/08/08.jpg',
        },
      ],
    },
    {
      src: 'assets/series/09/01.jpg',
      alt: 'Puck',
      id: 9,
      paddingRight: this.getRandomPadding(),
      category: 'Fashion',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/09/01.jpg',
        },
        {
          src: 'assets/series/09/02.jpg',
        },
        {
          src: 'assets/series/09/03.jpg',
        },
        {
          src: 'assets/series/09/04.jpg',
        },
      ],
    },
    {
      src: 'assets/series/10/01.jpg',
      alt: 'Photo 10',
      id: 10,
      paddingRight: this.getRandomPadding(),
      category: '1 / 3',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/10/01.jpg',
        },
        {
          src: 'assets/series/10/02.jpg',
        },
        {
          src: 'assets/series/10/03.jpg',
        },
        {
          src: 'assets/series/10/04.jpg',
        },
      ],
    },
    {
      src: 'assets/series/11/01.jpg',
      alt: 'Photo 11',
      id: 11,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '3 / 5', // occupies columns 3, 4, and 5
      gridRow: '1 / 3', // occupies rows 1 and 2
      seriesPhotos: [
        {
          src: 'assets/series/11/01.jpg',
        },
        {
          src: 'assets/series/11/02.jpg',
        },
        {
          src: 'assets/series/11/03.jpg',
        },
        {
          src: 'assets/series/11/04.jpg',
        },
        {
          src: 'assets/series/11/05.jpg',
        },
        {
          src: 'assets/series/11/06.jpg',
        },
      ],
    },
    {
      src: 'assets/series/12/01.jpg',
      alt: 'Photo 12',
      id: 12,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/12/01.jpg',
        },
        {
          src: 'assets/series/12/02.jpg',
        },
        {
          src: 'assets/series/12/03.jpg',
        },
        {
          src: 'assets/series/12/04.jpg',
        },
        {
          src: 'assets/series/12/05.jpg',
        },
        {
          src: 'assets/series/12/06.jpg',
        },
      ],
    },
    {
      src: 'assets/series/13/01.jpg',
      alt: 'Photo 13',
      id: 13,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/13/01.jpg',
        },
        {
          src: 'assets/series/13/02.jpg',
        },
        {
          src: 'assets/series/13/03.jpg',
        },
        {
          src: 'assets/series/13/04.jpg',
        },
      ],
    },
    {
      src: 'assets/series/14/01.jpg',
      alt: 'Photo 14',
      id: 13,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/14/01.jpg',
        },
        {
          src: 'assets/series/14/02.jpg',
        },
        {
          src: 'assets/series/14/03.jpg',
        },
        {
          src: 'assets/series/14/04.jpg',
        },
        {
          src: 'assets/series/14/05.jpg',
        },
        {
          src: 'assets/series/14/06.jpg',
        },
        {
          src: 'assets/series/14/07.jpg',
        },
        {
          src: 'assets/series/14/08.jpg',
        },
        {
          src: 'assets/series/14/09.jpg',
        },
        {
          src: 'assets/series/14/10.jpg',
        },
      ],
    },
    {
      src: 'assets/series/15/01.jpg',
      alt: 'Photo 15',
      id: 15,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/15/01.jpg',
        },
        {
          src: 'assets/series/15/02.jpg',
        },
        {
          src: 'assets/series/15/03.jpg',
        },
        {
          src: 'assets/series/15/04.jpg',
        },
      ],
    },
    {
      src: 'assets/series/16/01.jpg',
      alt: 'Photo 16',
      id: 16,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/16/01.jpg',
        },
        {
          src: 'assets/series/16/02.jpg',
        },
        {
          src: 'assets/series/16/03.jpg',
        },
        {
          src: 'assets/series/16/04.jpg',
        },
        {
          src: 'assets/series/16/05.jpg',
        },
      ],
    },
    {
      src: 'assets/series/17/01.jpg',
      alt: 'Photo 17',
      id: 17,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/17/01.jpg',
        },
        {
          src: 'assets/series/17/02.jpg',
        },
        {
          src: 'assets/series/17/03.jpg',
        },
        {
          src: 'assets/series/17/04.jpg',
        },
        {
          src: 'assets/series/17/05.jpg',
        },
        {
          src: 'assets/series/17/06.jpg',
        },
        {
          src: 'assets/series/17/07.jpg',
        },
        {
          src: 'assets/series/17/08.jpg',
        },
      ],
    },
    {
      src: 'assets/series/18/01.jpg',
      alt: 'Photo 18',
      id: 18,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/18/01.jpg',
        },
        {
          src: 'assets/series/18/02.jpg',
        },
        {
          src: 'assets/series/18/03.jpg',
        },
        {
          src: 'assets/series/18/04.jpg',
        },
        {
          src: 'assets/series/18/05.jpg',
        },
        {
          src: 'assets/series/18/06.jpg',
        },
        {
          src: 'assets/series/18/07.jpg',
        },
        {
          src: 'assets/series/18/08.jpg',
        },
        {
          src: 'assets/series/18/09.jpg',
        },
        {
          src: 'assets/series/18/10.jpg',
        },
      ],
    },
    {
      src: 'assets/series/19/01.jpg',
      alt: 'Photo 19',
      id: 19,
      paddingRight: this.getRandomPadding(),
      category: 'image',
      gridColumn: '1 / 3', // occupies columns 1 and 2
      gridRow: '3 / 5', // occupies rows 3, 4, and 5
      seriesPhotos: [
        {
          src: 'assets/series/19/01.jpg',
        },
        {
          src: 'assets/series/19/02.jpg',
        },
        {
          src: 'assets/series/19/03.jpg',
        },
        {
          src: 'assets/series/19/04.jpg',
        },
        {
          src: 'assets/series/19/05.jpg',
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
