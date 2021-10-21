import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-footer"></div>
      <div className="footer-footer">
        <div className="footer-links">
          <a href="https://godobet.it/privacy-policy">
            <span className="footer-item">Privacy Policy</span>
          </a>
          <a href="https://godobet.it/terms-of-service">
            <span className="footer-item">Termini di servizio</span>
          </a>
          <a href="https://godobet.it/support">
            <span className="footer-item">Servizio clienti</span>
          </a>
        </div>
      </div>
      <div className="footer-footer">
        <div className="footer-links">
          <a href="https://instagram.com/godobet?igshid=2zjrvuy5qem">
            <span className="footer-item"><em className={"feather icon-instagram"}></em> Instagram</span>
          </a>
          <a href="https://www.facebook.com/godobet/">
            <span className="footer-item"><em className={"feather icon-facebook"}></em> Facebook</span>
          </a>
          <a href="https://t.me/godobet">
            <span className="footer-item"><em className={"fa fa-telegram"}></em> Telegram</span>
          </a>
        </div>
      </div>
      <div className="footer-footer">
        <span className="text-muted">{"\u00a9"} GODOBET 2021</span>
      </div>
    </div>
  );
};

export default Footer;