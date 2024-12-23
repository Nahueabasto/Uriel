import React from 'react';
import DecoCard from '../Card/DecoCard';


const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <DecoCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.imgsrc[0]} // Asegúrate de que esta propiedad exista
                    temperament={product.descripcion} // O la propiedad que desees mostrar
                    weight={product.weight}
                    height={product.height}
                />
            ))}
        </div>
    );
};

export default ProductList;