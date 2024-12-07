import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';
import Footer from '../component/Footer';
import RenderCarousel from '../component/Render/RenderCarousel';

export default function Home(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []); // El segundo argumento asegura que esta función se ejecute solo una vez, después de que el componente se monte
    
    return(
        <div>
     <Navbar />
     <Slider />
     <RenderCarousel />
     <Footer />
        </div>
    )
} 