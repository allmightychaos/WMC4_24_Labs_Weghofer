import { Component, OnInit } from '@angular/core';
import { ProductService, ApiResponse } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
      selector: 'app-product-list',
      templateUrl: './product-list.component.html',
      styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
      products: Product[] = [];

      constructor(
            private productService: ProductService,
            private cartService: CartService
      ) { }

      ngOnInit(): void {
            this.productService.getAllProducts().subscribe({
                  next: (response: ApiResponse) => {
                        // In data.result steckt laut Angabe unser Array
                        this.products = response.data.result;
                  },
                  error: (err) => {
                        console.error('Fehler beim Laden der Produkte:', err);
                  }
            });
      }

      addToCart(product: Product): void {
            this.cartService.addToCart(product);
      }
}