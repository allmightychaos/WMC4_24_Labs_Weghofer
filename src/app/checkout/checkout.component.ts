import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service'; // Assumes you have a cart service
import { Order } from '../models/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  formSubmitted = false;
  orderError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      salutation: ['Herr', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }

    const order: Order = {
      salutation: this.checkoutForm.value.salutation,
      firstName: this.checkoutForm.value.firstName,
      lastName: this.checkoutForm.value.lastName,
      street: this.checkoutForm.value.street,
      postalCode: this.checkoutForm.value.postalCode,
      city: this.checkoutForm.value.city
    };

    this.orderService.placeOrder(order).subscribe({
      next: (response) => {
        // Clear the cart and navigate to the confirmation page.
        this.cartService.clearCart();
        this.router.navigate(['/confirmation'], { state: { order, cart: response } });
      },
      error: (error) => {
        this.orderError = 'There was an error processing your order.';
        console.error(error);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/product-list']);
  }
}