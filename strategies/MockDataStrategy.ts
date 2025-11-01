// lib/strategies/MockDataStrategy.ts
import {DataFetchingStrategy, Product} from './DataFetchingStrategy';

export class MockDataStrategy implements DataFetchingStrategy {
    async fetchProducts(): Promise<Product[]> {
        return [
            { id: '1', name: 'Laptop', price: 999 },
            { id: '2', name: 'Phone', price: 499 },
            { id: '3', name: 'Tablet', price: 299 },
        ];
    }
}