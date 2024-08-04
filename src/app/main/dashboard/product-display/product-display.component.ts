import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CartItem } from '../../../shared/interfaces/cart-item.interface';

@Component({
  selector: 'app-product-display',

  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.scss',
})
export class ProductDisplayComponent {
  products: CartItem[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      src: 'app/assets/1.jpg',
      title: 'Product 1 Title',
      info: 'Additional information about Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 1,
      src: 'app/assets/2.jpg',
      title: 'Product 2 Title',
      info: 'Additional information about Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      quantity: 1,
      src: 'app/assets/3.jpg',
      title: 'Product 3 Title',
      info: 'Additional information about Product 3',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      quantity: 1,
      src: 'app/assets/3.jpg',
      title: 'Product 3 Title',
      info: 'Additional information about Product 3',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: CartItem) {
    this.cartService.addToCart(product);
  }
}
