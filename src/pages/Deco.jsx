import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import RenderDeco from '../component/Deco/RenderDeco';
import Footer from '../component/Footer';

export default function Deco(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []); // El segundo argumento asegura que esta función se ejecute solo una vez, después de que el componente se monte
    
    return(
        <div>
     <Navbar />
     <RenderDeco categoria="deco" />
     <Footer />
        </div>
    )
} 