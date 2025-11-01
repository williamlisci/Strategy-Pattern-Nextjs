// lib/strategies/RestApiStrategy.ts
import {DataFetchingStrategy, Product} from './DataFetchingStrategy';

export class RestApiStrategy implements DataFetchingStrategy {
    async fetchProducts(): Promise<Product[]> {
        try {
            const response = await fetch('https://api.restful-api.dev/objects', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Map API response to Product interface
            return data.map((item: any) => ({
                id: item.id,
                name: item.name,
                price: item.data?.price || 0, // Default to 0 if price is not provided
            }));
        } catch (error) {
            console.error('Error fetching products from REST API:', error);
            return [];
        }
    }
}