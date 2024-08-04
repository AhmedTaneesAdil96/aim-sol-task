import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../shared/interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
      src: 'assets/product1.jpg',
      title: 'Product 1 Title',
      info: 'Additional information about Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 1,
      src: 'assets/product2.jpg',
      title: 'Product 2 Title',
      info: 'Additional information about Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      quantity: 3,
      src: 'assets/product3.jpg',
      title: 'Product 3 Title',
      info: 'Additional information about Product 3',
    },
  ];

  private cartItemCountSubject = new BehaviorSubject<number>(
    this.calculateTotalQuantity(),
  );
  cartItemCount$ = this.cartItemCountSubject.asObservable();
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  cart$ = this.cartSubject.asObservable();

  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id,
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.updateCart();
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    this.updateCart();
  }

  increaseQuantity(itemId: number): void {
    const item = this.cartItems.find((item) => item.id === itemId);
    if (item) {
      item.quantity++;
      this.updateCart();
    }
  }

  decreaseQuantity(itemId: number): void {
    const item = this.cartItems.find((item) => item.id === itemId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(itemId);
      }
      this.updateCart();
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  private updateCart(): void {
    this.cartSubject.next(this.cartItems);
    this.cartItemCountSubject.next(this.calculateTotalQuantity());
  }

  private calculateTotalQuantity(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
}
