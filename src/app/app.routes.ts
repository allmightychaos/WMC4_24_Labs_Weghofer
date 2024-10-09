import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WebshopComponent } from './webshop/webshop.component';
// import { WarenkorbComponent } from './warenkorb/warenkorb.component'; // TODO
// import { ImpressumComponent } from './impressum/impressum.component'; // TODO

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'shop', component: WebshopComponent },
  // { path: 'warenkorb', component: WarenkorbComponent }, // TODO
  // { path: 'impressum', component: ImpressumComponent } // TODO
];
