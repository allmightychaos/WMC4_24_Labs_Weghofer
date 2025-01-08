import { Injectable } from '@angular/core';
import { Product } from './product.model';

export interface CartItem {
      product: Product;
      quantity: number;
}

@Injectable({
      providedIn: 'root'
})
export class CartService {
      private cartItems: CartItem[] = [];

      constructor() { }

      addToCart(product: Product): void {
            console.log('Adding to cart:', product.title);
            // Wenn das Produkt bereits im Warenkorb ist, erhöhe nur die Menge
            const existingItem = this.cartItems.find(item => item.product.id === product.id);
            if (existingItem) {
                  existingItem.quantity++;
            } else {
                  this.cartItems.push({ product, quantity: 1 });
            }
      }

      removeFromCart(product: Product): void {
            console.log('Removing from cart:', product.title);
            const index = this.cartItems.findIndex(item => item.product.id === product.id);
            if (index > -1) {
                  this.cartItems.splice(index, 1);
            }
      }

      getCartItems(): CartItem[] {
            return this.cartItems;
      }

      clearCart(): void {
            this.cartItems = [];
      }
}