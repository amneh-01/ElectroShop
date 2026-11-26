import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop3');

  productName = signal('Laptop');

  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');

  productPrice = signal(850);

  productAvailability = signal(true);

  // Shopping Cart
  cart = signal<{
    productName: string;
    productPrice: number;
    quantity: number;
  } | null>(null);

  // Receive data from ProductDetails
  addToCart(event: {
    productName: string;
    productPrice: number;
    quantity: number;
  }) {
    this.cart.set(event);
  }

  // Display Second Product
  showSecondProduct() {
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.productAvailability.set(true);
  }

  // Display First Product
  showFirstProduct() {
    this.productName.set('Laptop');
    this.productDescription.set('Dell Laptop, Core i7, 16GB RAM');
    this.productPrice.set(850);
    this.productAvailability.set(true);
  }
}
