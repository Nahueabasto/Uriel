// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
//  import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// // import img from "../img/lo.png";
// import "./Navbar.css";

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

//   useEffect(() => {
//     window.addEventListener("scroll", changeColor);
//     return () => {
//       window.removeEventListener("scroll", changeColor);
//     };
//   }, []);

//   return (
// <div className={color ? "header header-bg" : "header"}>
//       <Link to="/">
//       <h1 className="portfolio-title">pipa</h1>
//       </Link>

//       <ul className={click ? "nav-menu active" : "nav-menu"}>
//         <li>
//           <Link to="/" onClick={handleClick}>Inicio</Link>
//         </li>
//         <li>
//           <Link to="/projects" onClick={handleClick}>Proyectos</Link>
//         </li>
//         <li>
//           <Link to="/about" onClick={handleClick}>Sobre mi</Link>
//         </li>
//       </ul>
//       <div className="hamburguer" onClick={handleClick}>
//         {click ? (
//           <CloseIcon size={30} style={{ color: "#fff" }} />
//         ) : (
//           <MenuIcon size={30} style={{ color: "#fff" }} />
//         )}
//       </div>
//       <div className="icons">
//            <a href="" target="_blank" rel="noopener noreferrer">
//              <WhatsAppIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
//            </a>
//            <a href="" target="_blank" rel="noopener noreferrer">
//              <FacebookIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
//            </a>
//            <a href="" target="_blank" rel="noopener noreferrer">
//              <InstagramIcon className="mui" size={20} style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }} />
//            </a>
       
//          </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
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

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="portfolio-title">pipa</h1>
      </Link>

      <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <CloseIcon size={30} style={{ color: "#fff" }} />
        ) : (
          <MenuIcon size={30} style={{ color: "#fff" }} />
        )}
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>Inicio</Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleClick}>Proyectos</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>Sobre mi</Link>
        </li>

        {/* Sección de contacto solo visible en el menú hamburguesa */}
        {click && (
          <div className="contact-info">
            <p> <EmailIcon style={{ color: "#fff", marginRight: "0.2rem" }} /> @gmail.com</p>
          
            <p> <WhatsAppIcon style={{ color: "#fff", marginRight: "0.2rem" }} />333333333</p>
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