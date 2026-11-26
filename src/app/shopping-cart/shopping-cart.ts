import { Component ,  Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {


  @Input() cart: {
    productName: string;
    productPrice: number;
    quantity: number;
  } | null = null;
}
