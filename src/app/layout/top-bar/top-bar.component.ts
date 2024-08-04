import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ObservableDestroyerDirective } from '../../shared/observable-destroyer.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent
  extends ObservableDestroyerDirective
  implements OnInit
{
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {
    super();
  }

  ngOnInit(): void {
    this.cartService.cartItemCount$
      .pipe(takeUntil(this.$destroyer))
      .subscribe((count) => {
        this.cartItemCount = count;
      });
  }
}
