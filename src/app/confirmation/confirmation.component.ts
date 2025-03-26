import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: any;
  cart: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.order = navigation.extras.state['order'];
      this.cart = navigation.extras.state['cart'];
    }
  }

  ngOnInit(): void {
    if (!this.order) {
      // If no order data is found, redirect to the homepage.
      this.router.navigate(['/']);
    }
  }
}