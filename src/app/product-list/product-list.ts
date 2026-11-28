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

/* products: Product[] = [
    {name: "Laptop", description: "High-performance laptop", price: 750, image: "https://static.vecteezy.com/system/resources/thumbnails/035/546/654/small_2x/ai-generated-vibrant-display-high-performance-gaming-ai-generated-laptop-template-photo.jpg", isAvailable: true},
    {name: "Smartphone", description: "Latest smartphone", price: 450, image: "https://image.lexica.art/full_jpg/f0bceab4-02dd-4614-9b4d-bfc9f78c1f89", isAvailable: true},
    {name: "Headphones", description: "Wireless headphones", price: 80, image: "https://tse3.mm.bing.net/th/id/OIP.DAKDsEAFDcgriUsO3wFd2AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", isAvailable: true},
    {name: "Smart Watch", description: "Smart fitness watch", price: 120, image: "https://www.bing.com/th/id/OIF.TNlchMUeS2r7VPJg5ZXmSA?w=193&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2", isAvailable: true},
    {name: "Keyboard", description: "Mechanical keyboard", price: 45, image: "https://m.media-amazon.com/images/I/71J-yr0JMYL._AC_SL1500_.jpg", isAvailable: false}
  ];

  buyNow(productName: string){
    alert("You bought: " + productName);
  }*/

    products=[{id:1, name:"Laptop",price:850, category:"Electronics", isAvailable:true, discount:0.15,image:"https://static.vecteezy.com/system/resources/thumbnails/035/546/654/small_2x/ai-generated-vibrant-display-high-performance-gaming-ai-generated-laptop-template-photo.jpg"},
              {id:2,name:"Smartphone",price:450,category:"Electronics",isAvailable:true,discount:0,image:"https://image.lexica.art/full_jpg/f0bceab4-02dd-4614-9b4d-bfc9f78c1f89"},
              {id:3,name:"Headphones",price:120,category:"Accessories",isAvailable:false,discount:0.1,image:"https://tse3.mm.bing.net/th/id/OIP.DAKDsEAFDcgriUsO3wFd2AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
              {id:4,name:"Smart Watch	",price:180,category:"Accessories",isAvailable:true,discount:0.2,image:"https://www.bing.com/th/id/OIF.TNlchMUeS2r7VPJg5ZXmSA?w=193&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"},
              {id:5,name:"Tablet",price:300,category:"Electronics",isAvailable:false,discount:0.05,image:"https://img.freepik.com/premium-photo/tablets-isolated-white-background-8k_1304645-24641.jpg"},
              {id:6,name:"Keyboard",price:65,category:"Accessories",isAvailable:true,discount:0.0,image:"https://m.media-amazon.com/images/I/71J-yr0JMYL._AC_SL1500_.jpg"},
              {id:7,name:"Gaming Mouse",price:45,category:"Accessories",isAvailable:true,discount:0.1,image:"https://img.freepik.com/premium-photo/highprecision-rgb-gaming-mouse-with-ergonomic-design_1134651-1693.jpg"},
              {id:8,name:"Monitor",price:220,category:"Electronics",isAvailable:false,discount:0.0,image:"https://img.freepik.com/free-photo/view-computer-monitor-display_23-2150757453.jpg?w=2000"}

            ];

orderStatus :string="jj";
selectedCategory: string = 'Electronics';


}
