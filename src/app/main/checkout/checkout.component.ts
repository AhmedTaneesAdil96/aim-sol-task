import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ObservableDestroyerDirective } from '../../shared/observable-destroyer.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent
  extends ObservableDestroyerDirective
  implements OnInit
{
  cartItems: any[] = [];
  totalPrice = 0;
  name: string = '';
  email: string = '';
  address: string = '';

  constructor(private cartService: CartService) {
    super();
  }

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(takeUntil(this.$destroyer))
      .subscribe((items) => {
        this.cartItems = items;
        this.totalPrice = this.cartService.getTotalPrice();
      });
  }

  onSubmit(): void {
    console.log('Order placed:', {
      name: this.name,
      email: this.email,
      address: this.address,
      cartItems: this.cartItems,
    });

    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    this.name = '';
    this.email = '';
    this.address = '';
  }
}
