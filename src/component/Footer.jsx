import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from "@mui/icons-material/Email";
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

        <div className="left">
          <h3>Contacto</h3>
       
        </div>
      </div>
    </div>
  );
};

export default Footer;