import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // @Input() product: Product;
  product: Product;

  constructor(private productService: ProductService) {
    this.product = this.productService.getProductById(2);
  }

  ngOnInit() {
  }

}
