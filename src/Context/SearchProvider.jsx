import React, { createContext, useContext, useState, useEffect } from 'react';
import DataGeneral from '../component/DataProduct/DataGeneral';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const allProducts = [
            ...DataGeneral.navidad,
            ...DataGeneral.deco,
            // Agrega otras categorías si es necesario
        ];

        const filtered = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredProducts(filtered);
    }, [searchQuery]);

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredProducts }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    return useContext(SearchContext);
};