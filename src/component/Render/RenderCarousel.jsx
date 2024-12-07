// import React, { useEffect, useState } from 'react';
// import DecoCard from "../Card/DecoCard";
// import DataGeneral from '../DataProduct/DataGeneral';
// import './RenderCarousel.css'; // Asegúrate de tener estilos para el carrusel

// const RenderCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const itemsPerPage = 4; // Número de tarjetas a mostrar por página

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Math.floor(DataGeneral.navidad.length / itemsPerPage)));
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     const items = DataGeneral.navidad || [];
//     const displayedItems = items.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

//     return (
//       <div className="carousel-div">
//             <div className="carousel-container">
//                 <button onClick={handlePrev} disabled={currentIndex === 0}>←</button>
//                 <div className="carousel">
//                     {displayedItems.map((val, ind) => (
//                         <DecoCard
//                             key={ind}
//                             id={val.id}
//                             imgsrc={val.imgsrc}
//                             name={val.name}
//                             descripcion={val.descripcion}
//                             type="navidad"
//                         />
//                     ))}
//                 </div>
//                 <button onClick={handleNext} disabled={currentIndex >= Math.floor(items.length / itemsPerPage)}>→</button>
//             </div>
//             </div>
//     );
// };

// export default RenderCarousel;

import React, { useEffect, useState } from 'react';
import DecoCard from "../Card/DecoCard";
import DataGeneral from '../DataProduct/DataGeneral';
import './RenderCarousel.css';

const RenderCarousel = () => {
    const [visibleCardIndex, setVisibleCardIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(4); // Valor inicial

    const items = DataGeneral.navidad || [];

    // Función para precargar imágenes
    const preloadImages = () => {
        items.forEach((item) => {
            const img = new Image();
            img.src = item.imgsrc; // Asegúrate de que el atributo `imgsrc` sea correcto
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
        updateCardsPerPage(); // Configurar inicialmente según el tamaño de la ventana
        window.addEventListener('resize', updateCardsPerPage); // Escuchar cambios de tamaño
        return () => {
            window.removeEventListener('resize', updateCardsPerPage); // Limpiar el listener
        };
    }, [items]);

    const handleNextClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setVisibleCardIndex((prevIndex) => (prevIndex + cardsPerPage) % items.length);
        }
    };

    const handlePrevClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setVisibleCardIndex(
                (prevIndex) => (prevIndex - cardsPerPage + items.length) % items.length
            );
        }
    };

    useEffect(() => {
        setIsTransitioning(false);
    }, [visibleCardIndex]);

    // Lógica para calcular las tarjetas visibles, haciendo que el carrusel sea circular
    const getVisibleCards = () => {
        let visibleCards = [];
        for (let i = 0; i < cardsPerPage; i++) {
            const index = (visibleCardIndex + i) % items.length;
            visibleCards.push(items[index]);
        }
        return visibleCards;
    };

    const visibleCards = getVisibleCards();

    return (
        <div className="paginado-container">
            <h3 className="left-align" style={{ color: "black", fontWeight: "bold" }}>Botas navideñas</h3>
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



