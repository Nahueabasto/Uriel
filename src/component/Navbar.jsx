// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailIcon from '@mui/icons-material/Email';
// import img from "../img/completa.png";
// // import img from "../img/logo.png";
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
//       setClick(false); // Cierra el menú hamburguesa si el tamaño de la ventana es mayor a 881px
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

//               <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={{ color: "#25D366", marginRight: "0.2rem", fontSize: "20px" }} /> 333333333</a>
              
//               <a href="mailto:uabasto77@gmail.com" target="_blank" rel="noopener noreferrer">
//                 <EmailIcon style={{ color: "#EA4335", marginRight: "0.2rem", fontSize: "20px", verticalAlign: "middle" }} /> 
//                 uabasto77@gmail.com</a>
//             </div>
//             <div className="contactanos">
//               <p>Nosotros</p>
//               <Link to="/about" onClick={handleClick} className="nav-link">Contacto</Link>
              
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

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="logo-container">
        <Link to="/">
          <img className="logoeco" src={img} alt="EcoEcho" width="60" height="60" />
        </Link>
        {/* Contenedor flex para el logo y el campo de búsqueda */}
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
        </div>
      </div>
      <div className="hamburguer" onClick={handleClick}>
      {click ? (
  <CloseIcon style={{ color: "#fff", fontSize: "30px" }} />
) : (
  <MenuIcon style={{ color: "#fff", fontSize: "30px" }} />
)}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick} className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleClick} className="nav-link">Proyectos</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick} className="nav-link">Sobre mí</Link>
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
              <p>Contacto</p>
            </div>
          </div>
        )}
      </ul>
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