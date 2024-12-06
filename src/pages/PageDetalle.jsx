import React, { useEffect } from 'react';
import Detalle from '../component/Render/Detalle';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

export default function PageDetalle(){
  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 

    return (
    <div>
     <Navbar />
     <Detalle />
     <Footer />
    </div>
    );
};

