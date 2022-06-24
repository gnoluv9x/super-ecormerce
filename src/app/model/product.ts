export interface Product {
  _id: string;
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}
