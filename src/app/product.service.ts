import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS, ACTIVITY_PRODUCTS } from './mock-products';


@Injectable()
export class ProductService {

  constructor() { }

  // 获取所有产品
  getProducts(): Product[] {
    return PRODUCTS;
  }

  // 获取所有活动商品
  getActivityProducts(): Product[] {
    return ACTIVITY_PRODUCTS;
  }
}
