import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax'; 

import { Product } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';
  products: Product[];

  ngOnInit() {
    const apiData = ajax('https://demo1999833.mockable.io/products');
    apiData.subscribe(
      res => this.products = res.response.products as Product[]
    );

  }
  
}