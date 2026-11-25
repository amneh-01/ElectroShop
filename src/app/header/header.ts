import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

welcomeMessage :string = 'Welcome to ElectroShop';
slogan  :string = 'Everything You Need in One Place';

}
