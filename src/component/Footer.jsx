import React from "react";
import "./Footer.css"

//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="right">
          <h4>Sobre mi</h4>
          <p>
         
          </p>
        </div>

        <div className="left">
  <h4>Contacto</h4>
  <div className="icon">
  
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="location">
        <LinkedInIcon
          size={20}
          style={{ color: "", fontSize: "1.8rem", marginRight: "1rem" }}
        />
    </div>
  </a>
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="location">
        <EmailIcon
          size={20}
          style={{ color: "", fontSize: "1.8rem", marginRight: "1rem" }}
        />
    </div>
  </a>
</div>
</div>
      
      </div>
    </div>
  );
};

export default Footer;