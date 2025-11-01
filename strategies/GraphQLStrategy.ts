// lib/strategies/GraphQLStrategy.ts
import {DataFetchingStrategy, Product} from './DataFetchingStrategy';

export class GraphQLStrategy implements DataFetchingStrategy {
    async fetchProducts(): Promise<Product[]> {
        // Placeholder: No GraphQL endpoint provided
        console.warn('GraphQL endpoint not configured');
        return [];
    }
}