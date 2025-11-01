// pages/index.tsx
'use client';

import {useEffect, useState} from 'react';
import {ProductService} from '../lib/strategies/ProductService';
import {RestApiStrategy} from '../lib/strategies/RestApiStrategy';
import {GraphQLStrategy} from '../lib/strategies/GraphQLStrategy';
import {MockDataStrategy} from '../lib/strategies/MockDataStrategy';
import {Product} from '../lib/strategies/DataFetchingStrategy';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [strategy, setStrategy] = useState('rest'); // Default to REST API
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const productService = new ProductService(new RestApiStrategy());

    useEffect(() => {
        setLoading(true);
        setError(null);

        // Update strategy based on selection
        if (strategy === 'rest') {
            productService.setStrategy(new RestApiStrategy());
        } else if (strategy === 'graphql') {
            productService.setStrategy(new GraphQLStrategy());
        } else {
            productService.setStrategy(new MockDataStrategy());
        }

        // Fetch products
        productService
            .getProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch products');
                setLoading(false);
                console.error(err);
            });
    }, [strategy]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Product List</h1>
            <div>
                <label>Select Data Source: </label>
                <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
                    <option value="rest">REST API</option>
                    <option value="mock">Mock Data</option>
                    <option value="graphql">GraphQL (Placeholder)</option>
                </select>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && products.length === 0 && <p>No products found.</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price ?? 'N/A'}
                    </li>
                ))}
            </ul>
        </div>
    );
}