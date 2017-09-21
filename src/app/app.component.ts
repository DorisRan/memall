import { Component, ViewEncapsulation } from '@angular/core';
import { TabModule } from 'ngx-weui/tab';

export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imgSrc: string;
  detailImgs: Array<string>;
  targetUrl: URL;
  quantity: number;
  constructor(
    iId: number,
    iTitle: string,
    iDescription: string,
    iPrice: number,
    iImgSrc: string,
    iDetailImgs: Array<string>,
    iTargetUrl: URL) {
    this.id = iId;
    this.title = iTitle;
    this.description = iDescription;
    this.price = iPrice;
    this.imgSrc = iImgSrc;
    this.detailImgs = iDetailImgs;
    this.targetUrl = iTargetUrl;
    this.quantity = 1;
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'me 拼团';
  val1 = 1;
  products: Array<Product>;
  // suitProducts: Array<Product>;
  swiperImgs: any[];
  activityImgs: any[];
  items: any[];
  log = '';
  options: any = {
    onInit: () => {
      setTimeout(() => { this.log = '初始化完成'; });
    },
    onSlideChangeEnd: (swiper: any) => {
      setTimeout(() => { this.log = `移动至第 ${swiper.realIndex + 1} 张`; });
    }
  };

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.swiperImgs = [
      // { url: 'assets/images/swiper/swiper-1.jpg', title: '标题1' },
      // { url: 'assets/images/swiper/swiper-2.jpg', title: '标题2' },
      { url: 'assets/images/swiper/swiper-3.jpg', title: '标题3' }
    ];

    this.activityImgs = [
      { url: 'assets/images/swiper/swiper-1.jpg', title: '标题1' },
      { url: 'assets/images/swiper/swiper-2.jpg', title: '标题2' },
      { url: 'assets/images/swiper/swiper-3.jpg', title: '标题3' },
      { url: 'assets/images/swiper/swiper-4.jpg', title: '标题2' },
      { url: 'assets/images/swiper/swiper-5.jpg', title: '标题3' }
    ];

    this.products = [
      new Product(1, '佳沛有机金奇异果', '', 12.9, 'assets/images/kiwi.jpg', [], new URL('http://www.fruitday.com/prodetail/index/25250')),
      new Product(2, '进口帝皇香蕉', '小香蕉的逆袭', 32.9,
        'assets/images/banana.jpg', [
          'assets/images/bananaDesc0.jpg',
          'assets/images/bananaDesc1.jpg',
          'assets/images/bananaDesc2.jpg',
          'assets/images/bananaDesc3.jpg',
          'assets/images/bananaDesc4.jpg',
          'assets/images/bananaDesc5.jpg'],
        new URL('http://www.fruitday.com/prodetail/index/24541')),
      new Product(3, '新西兰皇后红玫瑰苹果', '', 42.9, 'assets/images/apple.jpg', [], new URL('http://www.fruitday.com/prodetail/index/22327')),
      new Product(4, '新疆库尔勒香梨', '', 10.9, 'assets/images/pear.jpg', [], new URL('http://www.fruitday.com/prodetail/index/25846')),
      new Product(5, '玫瑰女皇葡萄', '', 22.9, 'assets/images/grapes.jpg', [], new URL('http://www.fruitday.com/prodetail/index/25563')),
      new Product(7, '佳沛有机金奇异果', '', 12.9, 'assets/images/kiwi.jpg', [], new URL('http://www.fruitday.com/prodetail/index/25250')),
      new Product(8, '进口帝皇香蕉', '', 32.9, 'assets/images/banana.jpg', [], new URL('http://www.fruitday.com/prodetail/index/24541')),
      new Product(9, '新西兰皇后红玫瑰苹果', '', 42.9, 'assets/images/apple.jpg', [], new URL('http://www.fruitday.com/prodetail/index/22327')),
      new Product(10, '新疆库尔勒香梨', '', 10.9, 'assets/images/pear.jpg', [], new URL('http://www.fruitday.com/prodetail/index/25846'))
    ];

    // this.suitProducts = [
    //   new Product(11, '嫦娥的礼物', '', 100, 'assets/images/activities/act-1.jpg', [], new URL('http://www.fruitday.com/prolist/index/43')),
    //   new Product(12, '月满乾坤', '', 100, 'assets/images/activities/act-1.jpg', [], new URL('http://www.fruitday.com/prolist/index/43')),
    // tslint:disable-next-line:max-line-length
    //   new Product(13, '金风玉露.中秋礼', '', 100, 'assets/images/activities/act-1.jpg', [], new URL('http://www.fruitday.com/prolist/index/43')),
    //   new Product(14, '玉兔追月.美满礼', '', 100, 'assets/images/activities/act-1.jpg', [], new URL('http://www.fruitday.com/prolist/index/43')),
    //   new Product(15, '喜悦礼盒', '', 100, 'assets/images/activities/act-1.jpg', [], new URL('http://www.fruitday.com/prolist/index/43'))];
    // this.items = Array(20).fill(0).map((v: any, i: number) => i);
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
