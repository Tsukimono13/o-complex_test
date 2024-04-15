export interface Item {
  id: string;
  image_url: string;
  title: string;
  description: string;
  price: number;
}

export interface PageResponse {
    amount: number;
    page: number;
    total: number;
    products: Item[];
}
