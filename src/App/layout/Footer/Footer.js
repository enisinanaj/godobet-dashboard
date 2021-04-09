import React from "react";
import { Row, Col } from "react-bootstrap";
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

{
  /* <div
style={{
  position: "absolute",
  bottom: "0",
  width: "100%",
  backgroundColor: "white",
  overflow: "hidden",
}}
>
<Row className="justify-content-md-center">
  <Col md="auto">Privacy Policy</Col>
  <Col md="auto">Terms of Service</Col>
  <Col md="auto">Blog</Col>
  <Col md="auto">godobet.it</Col>
</Row>
<Row className="text-center">
  <Col>
    <span className="text-muted">{"\u00a9"} GODOBET 2021</span>
  </Col>
</Row>
</div> */
}
