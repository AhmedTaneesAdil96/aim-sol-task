import {Component} from '@angular/core';

@Component({
  selector: 'app-product-display',

  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.scss'
})
export class ProductDisplayComponent {
  products = [
    {src: 'app/assets/1.jpg', title: 'Product 1', info: 'Description of Product 1'},
    {src: 'app/assets/2.jpg', title: 'Product 2', info: 'Description of Product 2'},
    {src: 'app/assets/3.jpg', title: 'Product 3', info: 'Description of Product 3'},
    {src: 'app/assets/3.jpg', title: 'Product 4', info: 'Description of Product 4'}
  ];
}
