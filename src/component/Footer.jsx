import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img from "../img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="right">
          <div className="seguino">
          <div className="lo">
        <Link to="/">
          <img className="logoeco" src={img} alt="EcoEcho" width="50" height="50" />
        </Link>
  
      </div>
            <p>Seguinos</p>
            <p><InstagramIcon style={{ color: "#fff", marginRight: "2rem", marginTop: "5px" }} /></p>
          </div>
        </div>
        <div className="le">
          <h3>Nosotros</h3>
          <Link to="/">
          <p>Contacto</p>
        </Link>
        </div>
        <div className="le">
          <h3>Contactanos</h3>
          <p><EmailIcon style={{ color: "#fff", marginRight: "0.2rem" }} /> @gmail.com</p>
          <p><WhatsAppIcon style={{ color: "#fff", marginRight: "0.2rem" }} /> 333333333</p>
        </div>
        <div className="le">
          <h3>Contactanos</h3>
          <Link to="/">
          <p>Contacto</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;