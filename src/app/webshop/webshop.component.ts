import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webshop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.css']
})
export class WebshopComponent {
  products = [
    { name: 'Rammstein T-Shirt schwarz', description: 'Baumwoll T-Shirt mit Aufdruck Rammstein und Logo der Band.', price: 19.90 },
    { name: 'Rammstein T-Shirt weiß', description: 'Baumwoll T-Shirt mit Aufdruck Rammstein und Logo der Band.', price: 19.90 },
    { name: 'Rammstein T-Shirt grau', description: 'Baumwoll T-Shirt mit Aufdruck Rammstein und Logo der Band.', price: 19.90 }
  ];
}
