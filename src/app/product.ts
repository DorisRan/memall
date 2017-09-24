export class Product {
  name: string;
  description: string;
  price: number;
  masterImg: string;
  detailImgs: Array<string>;
  quantity: number;
  constructor(
    iName: string,
    iDescription: string,
    iPrice: number,
    iMasterImage: string,
    iDetailImgs: Array<string>) {
    this.name = iName;
    this.description = iDescription;
    this.price = iPrice;
    this.masterImg = iMasterImage;
    this.detailImgs = iDetailImgs;
    this.quantity = 1;
  }
}
