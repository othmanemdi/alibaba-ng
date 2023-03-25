import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: any = [
    { id: 1, name: 'Produit 1', description: 'Description produit 1', price: 10 },
    { id: 2, name: 'Produit 2', description: 'Description produit 2', price: 20 },
    { id: 3, name: 'Produit 3', description: 'Description produit 3', price: 30 },
    { id: 4, name: 'Produit 4', description: 'Description produit 4', price: 40 },
    { id: 5, name: 'Produit 5', description: 'Description produit 5', price: 50 },
  ];
}
