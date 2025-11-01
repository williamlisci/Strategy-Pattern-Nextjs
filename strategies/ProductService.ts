// lib/strategies/ProductService.ts
import {DataFetchingStrategy, Product} from './DataFetchingStrategy';

export class ProductService {
    private strategy: DataFetchingStrategy;

    constructor(strategy: DataFetchingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: DataFetchingStrategy) {
        this.strategy = strategy;
    }

    async getProducts(): Promise<Product[]> {
        return this.strategy.fetchProducts();
    }
}