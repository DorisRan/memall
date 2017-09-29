import { Product } from './product';

export const PRODUCTS: Product[] = [
    new Product(1, '泰国香水椰青', '【比你邻居买的便宜】泰国香水椰青 59.9元/9个包邮（附开椰器）', '', 69.9, 59.9, 3, 'assets/images/products/001/master.jpg', []),
    new Product(2, '云南蒙自石榴', '回购率87.46%的云南蒙自雀斑石榴持续热销 29.9元/8个', '', 40, 29.9, 3, 'assets/images/products/002/master.jpg', []),
    new Product(3, '荔浦香芋', '广西特产荔浦香芋，个头搭，可入菜，可做甜品 16.6/1kg',
    '荔浦香芋，又名槟榔芋，产于广西，曾为贡品，个头大，营养丰富，风味特殊，以其茎块做成的菜肴香味纯，肉不腻口，口感好，是餐桌上的一道美肴。',
    20, 16.6, 5, 'assets/images/products/003/master.jpg',
    ['assets/images/products/003/01.jpg',
    'assets/images/products/003/02.jpg',
    'assets/images/products/003/03.jpg',
    'assets/images/products/003/04.jpg',
    'assets/images/products/003/05.jpg',
    'assets/images/products/003/06.jpg',
    'assets/images/products/003/07.jpg',
    'assets/images/products/003/08.jpg']),
    new Product(4, '鲜甜玉米', '甜脆爽口，皮薄多汁，生吃爆浆 13.6/500g', '', 20, 13.6, 10, 'assets/images/products/004/master.jpg', []),
    new Product(5, '新西兰芳香黄柠檬', '汁多肉嫩，独特芳香 25元/4个', '', 30, 25, 3, 'assets/images/products/005/master.jpg', []),
    new Product(6, '新疆库尔勒大香梨', '就是比别人家卖的大！来自新疆孔雀河核心产区的幸福果！ 35元/8个', '', 49.9, 35, 5, 'assets/images/products/006/master.jpg', []),
    new Product(7, '阳光玫瑰葡萄', '口感似提子，皮脆而肉有奇香 49.9/3斤', '', 59.9, 49.9, 5, 'assets/images/products/007/master.jpg', [])
];

