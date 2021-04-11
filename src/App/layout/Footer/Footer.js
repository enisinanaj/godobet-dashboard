import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/">
          <span className="footer-item">Privacy Policy</span>
        </a>
        <a href="/">
          <span className="footer-item">Terms of Service</span>
        </a>
        <a href="/">
          <span className="footer-item">Blog</span>
        </a>
        <a href="/">
          <span className="footer-item">godobet.it</span>
        </a>
      </div>
      <div className="footer-footer">
        <span className="text-muted">{"\u00a9"} GODOBET 2021</span>
      </div>
    </div>
  );
};

export default Footer;