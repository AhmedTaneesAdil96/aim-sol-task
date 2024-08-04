import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice = 0;
  name: string = '';
  email: string = '';
  address: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  onSubmit() {
    // Handle form submission, e.g., send data to backend
    console.log('Order placed:', {
      name: this.name,
      email: this.email,
      address: this.address,
      cartItems: this.cartItems,
    });

    // Clear cart and form after submission (for demonstration purposes)
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    this.name = '';
    this.email = '';
    this.address = '';
  }
}
