import {Component} from '@angular/core';

@Component({
  selector: 'app-product-range',

  templateUrl: './product-range.component.html',
  styleUrl: './product-range.component.scss'
})
export class ProductRangeComponent {
  images: string[] = [
    'app/assets/1.jpg',
    'app/assets/2.jpg',
    'app/assets/3.jpg'
  ];
}
