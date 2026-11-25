import { Component } from '@angular/core';

export interface Product{
  name: string;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
}
@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

 products: Product[] = [
    {name: "Laptop", description: "High-performance laptop", price: 750, image: "https://placehold.co/150x150?text=Laptop", isAvailable: true},
    {name: "Smartphone", description: "Latest smartphone", price: 450, image: "https://placehold.co/150x150?text=Smartphone", isAvailable: true},
    {name: "Headphones", description: "Wireless headphones", price: 80, image: "https://placehold.co/150x150?text=Headphones", isAvailable: true},
    {name: "Smart Watch", description: "Smart fitness watch", price: 120, image: "https://placehold.co/150x150?text=Smart+Watch", isAvailable: true},
    {name: "Keyboard", description: "Mechanical keyboard", price: 45, image: "https://placehold.co/150x150?text=Keyboard", isAvailable: false}
  ];

  buyNow(productName: string){
    alert("You bought: " + productName);
  }


}
