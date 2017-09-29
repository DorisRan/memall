import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabModule } from 'ngx-weui/tab';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopwindow',
  templateUrl: './shopwindow.component.html',
  styleUrls: ['./shopwindow.component.css'],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None
})

export class ShopwindowComponent implements OnInit {

  products: Array<Product>;

  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

    this.getProducts();
    this.selectedProduct = this.products[1];
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

}
