import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';
import Footer from '../component/Footer';
import RenderCarousel from '../component/Render/RenderCarousel';

export default function Home(){
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
     <Navbar />
     <Slider />
     <RenderCarousel />
     <Footer />
        </div>
    )
} 