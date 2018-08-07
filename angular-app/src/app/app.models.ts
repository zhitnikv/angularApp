export class Product {
  constructor(
    public name: string,
    public link: string,
    public img: string,
    public price: number,
    public bsr_category: string,
    public asin: string
  ) { }
}


export class Category {
  name: string;
  link: string;
  img: string;
  price: number;
  bsr_category: string;
  asin: string
}
