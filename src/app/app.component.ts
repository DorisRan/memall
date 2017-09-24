import { Component, ViewEncapsulation } from '@angular/core';
import { TabModule } from 'ngx-weui/tab';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'me 拼团';

  products: Array<Product>;
  activityProducts: Array<Product>;
  swiperImgs: any[];
  activityImgs: any[];

  selectedProduct: Product;

  log = '';
  options: any = {
    onInit: () => {
      setTimeout(() => { this.log = '初始化完成'; });
    },
    onSlideChangeEnd: (swiper: any) => {
      setTimeout(() => { this.log = `移动至第 ${swiper.realIndex + 1} 张`; });
    }
  };

  constructor(private productService: ProductService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

    this.getProducts();
    this.getActivityProducts();
    this.selectedProduct = this.products[1];

    this.swiperImgs = [
      // { url: this.activityProducts[0].masterImg, title: this.activityProducts[0].name },
      // { url: this.activityProducts[1].masterImg, title: this.activityProducts[1].name },
      { url: this.activityProducts[2].masterImg, title: this.activityProducts[2].name }
    ];

    this.activityImgs = [
      { url: this.activityProducts[0].masterImg, title: this.activityProducts[0].name },
      { url: this.activityProducts[1].masterImg, title: this.activityProducts[1].name },
      { url: this.activityProducts[2].masterImg, title: this.activityProducts[2].name },
      { url: this.activityProducts[3].masterImg, title: this.activityProducts[3].name },
      { url: this.activityProducts[4].masterImg, title: this.activityProducts[4].name }
    ];

  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  getActivityProducts() {
    this.activityProducts = this.productService.getActivityProducts();
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  onSearch(term: string) {
    console.log(term);
  }

  onCancel() {
    console.log('onCancel');
  }

  onClear() {
    console.log('onCancel');
  }

  onSubmit(value: string) {
    console.log('onSubmit', value);
  }
}
