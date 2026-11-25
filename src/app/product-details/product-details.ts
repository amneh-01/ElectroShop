import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {



  productImage: string = 'https://via.placeholder.com/200';

  productName: string = 'Samsung Galaxy';
  productDescription: string = 'A powerful Samsung smartphone';
  productPrice: number = 500;
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
  }

}
