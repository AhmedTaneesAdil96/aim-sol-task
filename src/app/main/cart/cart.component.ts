import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ObservableDestroyerDirective } from '../../shared/observable-destroyer.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent
  extends ObservableDestroyerDirective
  implements OnInit
{
  cartItems: any[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {
    super();
  }

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(takeUntil(this.$destroyer))
      .subscribe((items) => {
        this.cartItems = items;
        this.totalPrice = Number(this.cartService.getTotalPrice().toFixed(2));
      });
  }

  increaseQuantity(itemId: number): void {
    this.cartService.increaseQuantity(itemId);
  }

  decreaseQuantity(itemId: number): void {
    this.cartService.decreaseQuantity(itemId);
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }
}
