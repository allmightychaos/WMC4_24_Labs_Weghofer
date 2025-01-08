import { Component } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { Product } from '../product.model';

@Component({
      selector: 'app-cart',
      templateUrl: './cart.component.html',
      styleUrls: ['./cart.component.css']
})
export class CartComponent {
      cartItems: CartItem[] = [];

      constructor(private cartService: CartService) {
            this.cartItems = this.cartService.getCartItems();
      }

      removeItem(product: Product): void {
            this.cartService.removeFromCart(product);
      }

      getTotalItemPrice(item: CartItem): number {
            return item.product.price * item.quantity;
      }

      getTotal(): number {
            return this.cartItems.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
            );
      }
}