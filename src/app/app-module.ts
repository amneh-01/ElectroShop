import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { ProductDetails } from './product-details/product-details';
import { ProductList } from './product-list/product-list';

@NgModule({
  declarations: [App, Footer, Header, Navbar, ProductDetails, ProductList],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
