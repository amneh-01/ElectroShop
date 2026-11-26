import { Component,  Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {

 /* productName: string = 'Laptop';
  productDescription: string = 'Dell Laptop, Core i7, 16GB RAM';
  productPrice: number = 850;
  discountPercentage: number = 10;
  isAvailable: boolean = true;
  quantity: number = 1;

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  getFinalPrice(): number {
    return this.productPrice -
      (this.productPrice * this.discountPercentage / 100);
  }*/

  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productPrice: number = 0;
  @Input() productAvailability: boolean = false;

  quantity = signal(1);

  @Output() addToCart = new EventEmitter<{
    productName: string;
    productPrice: number;
    quantity: number;
  }>();

  increaseQuantity() {
    this.quantity.update(value => value + 1);
  }

  decreaseQuantity() {
    this.quantity.update(value => value > 1 ? value - 1 : 1);
  }

  addProduct() {
    this.addToCart.emit({
      productName: this.productName,
      productPrice: this.productPrice,
      quantity: this.quantity()
    });
  }


}
