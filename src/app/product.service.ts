import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS} from './mock-products';


@Injectable()
export class ProductService {

  constructor() { }

  // 获取所有产品
  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductById( id: number) {
    return PRODUCTS[id];
  }
}
