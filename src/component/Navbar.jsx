import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import img from "../img/logo.png";
import "./Navbar.css";

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
      setClick(false); // Cierra el menú hamburguesa si el tamaño de la ventana es mayor a 881px
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
  <MenuIcon style={{ color: "#000000", fontSize: "30px" }} />
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
              <p><InstagramIcon style={{ color: "#fff", marginRight: "0.2rem", marginBottom: "10px" }} /></p>
            </div>
            <div className="contactanos">
              <p>Contactanos</p>
              <p><EmailIcon style={{ color: "#fff", marginRight: "0.2rem" }} /> @gmail.com</p>
              <p><WhatsAppIcon style={{ color: "#fff", marginRight: "0.2rem" }} /> 333333333</p>
            </div>
            <div className="contactanos">
              <p>Nosotros</p>
              <p>Contacto</p>
            </div>
          </div>
        )}
      </ul>
      <div className="icons">
        <a href="" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;