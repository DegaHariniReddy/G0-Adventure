import { Component,OnInit  } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],

})
export class HomeComponent implements OnInit  {
  images: string[] = [
  //  'assets/GOAdvt.jpg',
  //  'assets/Screenshot 2024-05-07 102453.png',
   'assets/Manali.jpg',
   'assets/kerala.jpg',
   'assets/Fire.jpg',
   'assets/Ladakh.jpg',
  //  'assets/Screenshot 2024-05-07 102435.png',
   'assets/Screenshot 2024-05-07 102413.png',
   'assets/Screenshot 2024-05-07 102333.png',
   'assets/Screenshot 2024-05-07 102316.png'
   

    // Add more image URLs as needed
  ];
  currentImage: string = this.images[0];
  currentIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.startSlideshow();
  }
  startSlideshow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
  onHover(index: number) {
    this.currentIndex = index;
  }

  onHoverOut() {
    this.currentIndex = -1; // Reset currentIndex when not hovering
  }

  


}
