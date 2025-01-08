import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WebshopComponent } from './webshop/webshop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'shop', component: WebshopComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];
