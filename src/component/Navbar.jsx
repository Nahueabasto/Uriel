// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailIcon from '@mui/icons-material/Email';
// import img from "../img/completa.png";
// import cults from "../img/cults.png";
// import "./Navbar.css";
// import TelegramIcon from '@mui/icons-material/Telegram';

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   const handleResize = () => {
//     if (window.innerWidth > 881) {
//       setClick(false); 
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeColor);
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("scroll", changeColor);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className={color ? "header header-bg" : "header"}>
//       <div className="logo-container">
//         <Link to="/">
//           <img className="logoeco" src={img} alt="EcoEcho" width="60" height="60" />
//         </Link>
//         {/* Contenedor flex para el logo y el campo de búsqueda */}
//         <div className="search-container">
//           <input type="text" placeholder="Buscar..." className="search-input" />
//         </div>
//       </div>
//       <div className="hamburguer" onClick={handleClick}>
//       {click ? (
//   <CloseIcon style={{ color: "#fff", fontSize: "30px" }} />
// ) : (
//   <MenuIcon style={{ color: "#fff", fontSize: "30px" }} />
// )}
//       </div>
//       <ul className={click ? "nav-menu active" : "nav-menu"}>
//         <li>
//           <Link to="/" onClick={handleClick} className="nav-link">Inicio</Link>
//         </li>
//         <li>
//           <Link to="/projects" onClick={handleClick} className="nav-link">Proyectos</Link>
//         </li>
//         <li>
//           <Link to="/about" onClick={handleClick} className="nav-link">Sobre mí</Link>
//         </li>
//         {click && (
//           <div className="contact-info">
//             <div className="seguinos">
//               <p>Seguinos</p>
//               <p>
//               <a href="https://www.instagram.com/pipa.3design/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ color: "#C13584", marginRight: "0.2rem", fontSize: "20px" }} /></a></p>
//             </div>
//             <div className="contactanos">
//               <p>Contactanos</p>
//               <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer"><TelegramIcon style={{ color: "#0088cc", marginRight: "0.2rem", fontSize: "20px", verticalAlign: "middle" }} />T.me/Pipa187</a>
//               <a href="https://cults3d.com/es/usuarios/UrielPipa/modelos-3d" target="_blank" rel="noopener noreferrer">
//       <img 
//         src={cults} 
//         alt="Cults Icon" 
//         style={{ 
//           color: "#EA4335", // Este estilo no se aplicará a la imagen, puedes eliminarlo
//           marginRight: "0.3rem", 
//           width: "20px", // Ajusta el tamaño según sea necesario
//           height: "20px", // Ajusta el tamaño según sea necesario
//           verticalAlign: "middle" 
//         }} 
//       />
//       @UrielPipa
//     </a>
//               <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={{ color: "#25D366", marginRight: "0.2rem", fontSize: "20px" }} /> 333333333</a>
//               <a href="mailto:uabasto77@gmail.com" target="_blank" rel="noopener noreferrer">
//                 <EmailIcon style={{ color: "#EA4335", marginRight: "0.2rem", fontSize: "20px", verticalAlign: "middle" }} /> 
//                 uabasto77@gmail.com</a>
//             </div>
//             <div className="contactanos">
//               <p>Nosotros</p>
//               <p>Contacto</p>
//             </div>
//           </div>
//         )}
//       </ul>
//       <div className="icons">
//         <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer">
//           <TelegramIcon className="mui" size={20} style={{ color: "#0088cc", fontSize: "20px", marginRight: "1rem" }} />
//         </a>
//         <a href="" target="_blank" rel="noopener noreferrer">
//           <WhatsAppIcon className="mui" size={20} style={{ color: "#25D366", fontSize: "20px", marginRight: "1rem" }} />
//         </a>
//         <a href="https://www.instagram.com/pipa.3design/" target="_blank" rel="noopener noreferrer">
//           <InstagramIcon className="mui" size={20} style={{ color: "#C13584", fontSize: "20px", marginRight: "1rem" }} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

///////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailIcon from '@mui/icons-material/Email';
// import img from "../img/completa.png";
// import cults from "../img/cults.png";
// import "./Navbar.css";
// import TelegramIcon from '@mui/icons-material/Telegram';

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   const handleResize = () => {
//     if (window.innerWidth > 881) {
//       setClick(false); 
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeColor);
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("scroll", changeColor);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className={color ? "header header-bg" : "header"}>
//       <div className="logo-container">
//         <Link to="/">
//           <img className="logoeco" src={img} alt="EcoEcho" width="60" height="60" />
//         </Link>
//         <div className="search-container">
//           <input type="text" placeholder="Buscar..." className="search-input" />
//         </div>
//       {/* <div className="menu-container"> */}
//   <div className="hamburguer" onClick={handleClick}>
//     {click ? (
//       <CloseIcon style={{ color: "#fff", fontSize: "30px" }} />
//     ) : (
//       <div className="menu-content">
//         <MenuIcon style={{ color: "#fff", fontSize: "30px" }} />
//         <span className="menu-label">Menú</span>
//       </div>
//   )}
// </div>
// {click && <div className="overlay" onClick={handleClick} />}

// <ul className={click ? "nav-menu active" : "nav-menu"}>
//   <li>
//     <Link to="/" onClick={handleClick} className="nav-link">Día del Padre</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Día de la Madre</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Pascuas</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Navidad</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Halloween</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Mates</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Vasos y Chop</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Llaveros</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Flexi</Link>
//   </li>
//   <li>
//     <Link to="/projects" onClick={handleClick} className="nav-link">Deco</Link>
//   </li>
  
//   {/* Aquí va el contenido adicional que quieres mostrar */}
//   <div className="contact-info">
//     <div className="seguinos">
//       <p>Seguinos</p>
//       <p>
//         <a href="https://www.instagram.com/pipa.3design/" target="_blank" rel="noopener noreferrer">
//           <InstagramIcon style={{ color: "#C13584", marginRight: "0.2rem", fontSize: "20px" }} />
//         </a>
//       </p>
//     </div>
//     <div className="contactanos">
//       <p>Contactanos</p>
//       <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer">
//         <TelegramIcon style={{ color: "#0088cc", marginRight: "0.2rem", fontSize: "20px", verticalAlign: "middle" }} />T.me/Pipa187
//       </a>
//       <a href="https://cults3d.com/es/usuarios/UrielPipa/modelos-3d" target="_blank" rel="noopener noreferrer">
//         <img 
//           src={cults} 
//           alt="Cults Icon" 
//           style={{ 
//             marginRight: "0.3rem", 
//             width: "20px", 
//             height: "20px", 
//             verticalAlign: "middle" 
//           }} 
//         />
//         @UrielPipa
//       </a>
//       <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer">
//         <WhatsAppIcon style={{ color: "#25D366", marginRight: "0.2rem", fontSize: "20px" }} /> 333333333
//       </a>
//       <a href="mailto:uabasto77@gmail.com" target="_blank" rel="noopener noreferrer">
//         <EmailIcon style={{ color: "#EA4335", marginRight: "0.2rem", fontSize: "20px", verticalAlign: "middle" }} /> 
//         uabasto77@gmail.com
//       </a>
//     </div>
//     <div className="contactanos">
//       <p>Nosotros</p>
//       <p>Contacto</p>
//     </div>
//   </div>
// </ul>
//       {/* </div> */}
//       </div>
      
//       <div className="icons">
//         <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer">
//           <TelegramIcon className="mui" size={20} style={{ color: "#0088cc", fontSize: "20px", marginRight: "1rem" }} />
//         </a>
//         <a href="" target="_blank" rel="noopener noreferrer">
//           <WhatsAppIcon className="mui" size={20} style={{ color: "#25D366", fontSize: "20px", marginRight: "1rem" }} />
//         </a>
//         <a href="https://www.instagram.com/pipa.3design/" target="_blank" rel="noopener noreferrer">
//           <InstagramIcon className="mui" size={20} style={{ color: "#C13584", fontSize: "20px", marginRight: "1rem" }} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import img from "../img/completa.png";
import cults from "../img/cults.png";
import "./Navbar.css";
import TelegramIcon from '@mui/icons-material/Telegram';
// import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => {
    setClick(!click);
    
    // Si el menú se está abriendo, restablecer el desplazamiento
    if (!click) {
      const menu = document.querySelector('.nav-menu');
      if (menu) {
        menu.scrollTop = 0; // Restablecer el desplazamiento a la parte superior
      }
    } else {
      // Si el menú se está cerrando, también restablecer el desplazamiento
      const menu = document.querySelector('.nav-menu');
      if (menu) {
        menu.scrollTop = 0; // Restablecer el desplazamiento a la parte superior
      }
    }
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 881) {
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("resize", handleResize);
    
    // Agregar o quitar la clase 'no-scroll' al body según el estado de 'click'
    if (click) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove('no-scroll'); // Asegúrate de limpiar al desmontar
    };
  }, [click]);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="logo-container">
        <Link to="/">
          <img className="logoeco" src={img} alt="EcoEcho" width="60" height="60" />
        </Link>
      {/* <div className="menu-and-search"> */}
      <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <CloseIcon className="re" style={{ color: "#fff", fontSize: "30px" }} />
        ) : (
          <div className="menu-content">
            <MenuIcon className="re" style={{ color: "#fff", fontSize: "30px" }} />
            <span className="menu-label" style={{ color: "#fff" }}>Menú</span>
          </div>
        )}
      </div>
      
      {click && <div className="overlay" onClick={handleClick} />}
      
      <ul className={click ? "nav-menu active" : "nav-menu"}>
  {click && (

    <li className="nav-item">
          <Link to="/">
    <img className="logoeco" src={img} alt="EcoEcho" width="60" height="60" />
  </Link>
      <div className="close-icon">
        <CloseIcon style={{ color: "#fff", fontSize: "30px" }} onClick={handleClick} />
      </div>
      
    </li>
  )}
        <li>
          <Link to="/diadelpadre" onClick={handleClick} className="nav-link">Día del Padre</Link>
        </li>
        <li>
          <Link to="/diadelamadre" onClick={handleClick} className="nav-link">Día de la Madre</Link>
        </li>
        <li>
          <Link to="/pascuas" onClick={handleClick} className="nav-link">Pascuas</Link>
        </li>
        <li>
          <Link to="/navidad" onClick={handleClick} className="nav-link">Navidad</Link>
        </li>
        <li>
          <Link to="/halloween" onClick={handleClick} className="nav-link">Halloween</Link>
        </li>
        <li>
          <Link to="/mates" onClick={handleClick} className="nav-link">Mates</Link>
        </li>
        <li>
          <Link to="/vasosychop" onClick={handleClick} className="nav-link">Vasos y Chop</Link>
        </li>
        <li>
          <Link to="/llaveros" onClick={handleClick} className="nav-link">Llaveros</Link>
        </li>
        <li>
          <Link to="/flexi" onClick={handleClick} className="nav-link">Flexi</Link>
        </li>
        <li>
          <Link to="/deco" onClick={handleClick} className="nav-link">Deco</Link>
        </li>
        
        {click && (
          <div className="contact-info">
            <div className="seguinos">
              <p>Seguinos</p>
              <p>
              <a href="https://www.instagram.com/pipa.3design/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ color: "#C13584", marginRight: "0.2rem", fontSize: "20px" }} /></a></p>
            </div>
            <div className="contactanos">
              <p>Contactanos</p>
              <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer"><TelegramIcon style={{ color: "#0088cc", marginRight: "0.2rem", fontSize: "20px", verticalAlign: "middle" }} />T.me/Pipa187</a>
              <a href="https://cults3d.com/es/usuarios/UrielPipa/modelos-3d" target="_blank" rel="noopener noreferrer">
      <img 
        src={cults} 
        alt="Cults Icon" 
        style={{ 
          color: "#EA4335", // Este estilo no se aplicará a la imagen, puedes eliminarlo
          marginRight: "0.3rem", 
          width: "20px", // Ajusta el tamaño según sea necesario
          height: "20px", // Ajusta el tamaño según sea necesario
          verticalAlign: "middle" 
        }} 
      />
      @UrielPipa
    </a>
              <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={{ color: "#25D366", marginRight: "0.2rem", fontSize: "20px" }} /> 333333333</a>
              <a href="mailto:uabasto77@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon style={{ color: "#EA4335", marginRight: "0.2rem", fontSize: "20px", verticalAlign: "middle" }} /> 
                uabasto77@gmail.com</a>
            </div>
            <div className="contactanos">
              <p>Nosotros</p>
              <Link onClick={handleClick} to="/contacto">
              <p>Contacto</p>
              </Link>
            </div> 
          </div> 
        )}  
      </ul>
      </div>
     
    {/* </div> */}
    <div className="search-container">
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>
      <div className="icons">
        <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer">
          <TelegramIcon className="mui" size={20} style={{ color: "#0088cc", fontSize: "20px", marginRight: "1rem" }} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="mui" size={20} style={{ color: "#25D366", fontSize: "20px", marginRight: "1rem" }} />
        </a>
        <a href="https://www.instagram.com/pipa.3design/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="mui" size={20} style={{ color: "#C13584", fontSize: "20px", marginRight: "1rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;