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

// import React, { useEffect, useState } from 'react';
// import DecoCard from "../Card/DecoCard";
// import DataGeneral from '../DataProduct/DataGeneral';
// import './RenderCarousel.css'; // Asegúrate de tener estilos para el carrusel

// const RenderCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemsPerPage, setItemsPerPage] = useState(4); // Número inicial de tarjetas a mostrar por página

//     const items = DataGeneral.navidad || [];

//     // Detectar cambios en el tamaño de la ventana para ajustar itemsPerPage
//     useEffect(() => {
//         const updateItemsPerPage = () => {
//             if (window.innerWidth <= 768) {
//                 setItemsPerPage(1); // Pantallas pequeñas
//             } else if (window.innerWidth <= 1024) {
//                 setItemsPerPage(3); // Pantallas medianas
//             } else {
//                 setItemsPerPage(4); // Pantallas grandes
//             }
//         };

//         updateItemsPerPage(); // Ajustar al cargar
//         window.addEventListener('resize', updateItemsPerPage); // Listener para cambios en el tamaño
//         return () => window.removeEventListener('resize', updateItemsPerPage);
//     }, []);

//     // Control de scroll
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const handleNext = () => {
//         const maxIndex = Math.ceil(items.length / itemsPerPage) - 1;
//         setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     const displayedItems = items.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

//     return (
//         <div className="carousel-div">
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
//                 <button
//                     onClick={handleNext}
//                     disabled={currentIndex >= Math.ceil(items.length / itemsPerPage) - 1}
//                 >
//                     →
//                 </button>
//             </div>
//         </div>
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
    const cardsPerPage = 4; // Ajusta la cantidad de tarjetas visibles según el diseño

    const items = DataGeneral.navidad || [];

    const handleNextClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setVisibleCardIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
    };

    const handlePrevClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setVisibleCardIndex((prevIndex) =>
                prevIndex === 0 ? items.length - 1 : prevIndex - 1
            );
        }
    };

    useEffect(() => {
        setIsTransitioning(false);
    }, [visibleCardIndex]);

    const visibleCards = [];
    for (let i = 0; i < cardsPerPage; i++) {
        const index = (visibleCardIndex + i) % items.length;
        visibleCards.push(items[index]);
    }

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

