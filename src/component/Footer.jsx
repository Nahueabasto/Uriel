import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img from "../img/completa.png";
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="right">
          <div className="seguino">
          <div className="lo">
        <Link to="/">
          <img className="logoeco" src={img} alt="EcoEcho" width="60" height="60" />
        </Link>
      </div>
      <h3>Seguinos</h3>
      <a href="https://www.instagram.com/pipa.3design/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon style={{ color: "#C13584", marginRight: "2rem", marginTop: "5px", fontSize: "20px" }} /> 
        </a>
          </div>
        </div>
        <div className="le">
          <h3>Contacto</h3>
          <Link to="/contacto">
          <p>Contacto</p>
        </Link>
        </div>
        <div className="le">
  <h3>Contactanos</h3>
  <p>
  <a href="https://t.me/Pipa187" target="_blank" rel="noopener noreferrer">
    <TelegramIcon style={{ color: "#0088cc", marginRight: "0.3rem", fontSize: "20px", verticalAlign: "middle" }} /> 
    T.me/Pipa187
    </a>
    </p>
  <p>
  <a href="" target="_blank" rel="noopener noreferrer">
    <WhatsAppIcon style={{ color: "#25D366", marginRight: "0.3rem", fontSize: "20px", verticalAlign: "middle" }} /> 
    333333333
    </a>
  </p>
  <p>
  <a href="mailto:uabasto77@gmail.com" target="_blank" rel="noopener noreferrer">
    <EmailIcon style={{ color: "#EA4335", marginRight: "0.3rem", fontSize: "20px", verticalAlign: "middle" }} /> 
    uabasto77@gmail.com
    </a>
  </p>
  <p>
  <a href="https://cults3d.com/es/usuarios/UrielPipa/modelos-3d" target="_blank" rel="noopener noreferrer">
    <EmailIcon style={{ color: "#EA4335", marginRight: "0.3rem", fontSize: "20px", verticalAlign: "middle" }} /> 
    UrielPipa
    </a>
  </p>
</div>
        <div className="le">
          <h3>Nosotros</h3>
          <Link to="/about">
          <p>About</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;