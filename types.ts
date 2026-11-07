export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  stock: number;
  featured: boolean;
}

export interface Category {
  name: string;
  imageUrl: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProductResponse {
  items: Product[];
  page: number;
  limit: number;
  total: number;
  pages: number;
}
