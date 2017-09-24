import { Product } from './product';

export const PRODUCTS: Product[] = [
    new Product('佳沛有机金奇异果', '', 12.9, 'assets/images/kiwi.jpg', []),
    new Product('进口帝皇香蕉', '小香蕉的逆袭', 32.9,
        'assets/images/banana.jpg', [
            'assets/images/bananaDesc0.jpg',
            'assets/images/bananaDesc1.jpg',
            'assets/images/bananaDesc2.jpg',
            'assets/images/bananaDesc3.jpg',
            'assets/images/bananaDesc4.jpg',
            'assets/images/bananaDesc5.jpg']),
    new Product('新西兰皇后红玫瑰苹果', '', 42.9, 'assets/images/apple.jpg', []),
    new Product('新疆库尔勒香梨', '', 10.9, 'assets/images/pear.jpg', []),
    new Product('玫瑰女皇葡萄', '', 22.9, 'assets/images/grapes.jpg', []),
    new Product('佳沛有机金奇异果', '', 12.9, 'assets/images/kiwi.jpg', []),
    new Product('进口帝皇香蕉', '', 32.9, 'assets/images/banana.jpg', []),
    new Product('新西兰皇后红玫瑰苹果', '', 42.9, 'assets/images/apple.jpg', []),
    new Product('新疆库尔勒香梨', '', 10.9, 'assets/images/pear.jpg', [])
];

export const ACTIVITY_PRODUCTS: Product[] = [
    new Product('标题1', '', 100, 'assets/images/swiper/swiper-1.jpg', []),
    new Product('标题2', '', 100, 'assets/images/swiper/swiper-2.jpg', []),
    new Product('标题3', '', 100, 'assets/images/swiper/swiper-3.jpg', []),
    new Product('标题4', '', 100, 'assets/images/swiper/swiper-4.jpg', []),
    new Product('标题5', '', 100, 'assets/images/swiper/swiper-5.jpg', []),
    new Product('月满乾坤', '', 100, 'assets/images/activities/act-2.jpg', []),
    new Product('金风玉露.中秋礼', '', 100, 'assets/images/activities/act-3.jpg', []),
    new Product('玉兔追月.美满礼', '', 100, 'assets/images/activities/act-4.jpg', []),
    new Product('喜悦礼盒', '', 100, 'assets/images/activities/act-5.jpg', [])];
