import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = Number(this.cartService.getTotalPrice().toFixed(2));
    });
  }

  increaseQuantity(itemId: number) {
    this.cartService.increaseQuantity(itemId);
  }

  decreaseQuantity(itemId: number) {
    this.cartService.decreaseQuantity(itemId);
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }
}
