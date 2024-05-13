import React, { useEffect, useState, useMemo } from 'react';
import Card from './Card';
import { getProducts } from '../util/api';

function ProductsWrapper() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data.products))
            .catch(err => console.error(err));
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="search" hidden>Buscar</label>
            <div className="search-bar">
                <input 
                    id="search"
                    name="search"
                    type="text"
                    className="search-input"
                    placeholder="Buscar producto"
                    onChange={e => handleSearch(e.target.value)}
                    value={searchTerm}
                />
            </div>
            <div className="card__wrapper">
                {filteredProducts.map(product => (
                    <Card
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsWrapper;