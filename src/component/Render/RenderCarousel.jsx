import React, { useEffect, useState } from 'react';
import DecoCard from "../Card/DecoCard";
import DataGeneral from '../DataProduct/DataGeneral';
import './RenderCarousel.css';

const RenderCarousel = () => {
    const [visibleCardIndex, setVisibleCardIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(4);

    const items = DataGeneral.navidad || [];

    // Función para precargar imágenes
    const preloadImages = () => {
        items.forEach((item) => {
            const img = new Image();
            img.src = item.imgsrc;
        });
    };

    // Ajustar el número de tarjetas visibles según el ancho de la ventana
    const updateCardsPerPage = () => {
        const width = window.innerWidth;
        if (width <= 837) {
            setCardsPerPage(1);
        } else if (width <= 1045) {
            setCardsPerPage(2);
        } else if (width <= 1237) {
            setCardsPerPage(3);
        } else {
            setCardsPerPage(4);
        }
    };

    // Llama a la precarga cuando se monte el componente
    useEffect(() => {
        preloadImages();
        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => {
            window.removeEventListener('resize', updateCardsPerPage);
        };
    }, [items]);

    // Maneja el clic del botón de siguiente
    const handleNextClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setVisibleCardIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
    };

    // Maneja el clic del botón de anterior
    const handlePrevClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setVisibleCardIndex((prevIndex) =>
                (prevIndex - 1 + items.length) % items.length
            );
        }
    };

    // Restablece la transición después de que el índice cambia
    useEffect(() => {
        setIsTransitioning(false);
    }, [visibleCardIndex]);

    // Obtén las tarjetas visibles
    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < cardsPerPage; i++) {
            const index = (visibleCardIndex + i) % items.length;
            visibleCards.push(items[index]);
        }
        return visibleCards;
    };

    const visibleCards = getVisibleCards();

    return (
        <div className="paginado-container">
            <h3 className="left-align" style={{ color: "black", fontWeight: "bold" }}>
                Botas navideñas
            </h3>
            <div className="cards-container">
                <button
                    className="pagination-button"
                    onClick={handlePrevClick}
                    disabled={isTransitioning}
                >
                    &lt;
                </button>
                {visibleCards.map((card, index) =>
                    card ? (
                        <DecoCard
                            key={card.id || index}
                            id={card.id}
                            imgsrc={card.imgsrc}
                            name={card.name}
                            descripcion={card.descripcion}
                            type="navidad"
                        />
                    ) : (
                        <div key={index} className="empty-card" />
                    )
                )}
                <button
                    className="pagination-button"
                    onClick={handleNextClick}
                    disabled={isTransitioning}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default RenderCarousel;





