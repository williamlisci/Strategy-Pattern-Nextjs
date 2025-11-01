// lib/strategies/DataFetchingStrategy.ts
export interface DataFetchingStrategy {
    fetchProducts(): Promise<Product[]>;
}

export interface Product {
    id: string; // API uses string IDs
    name: string;
    price?: number; // Price is optional, as it comes from the `data` field
}