import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <span>
          <i className="fab fa-instagram" aria-hidden="true" />
          <i className="fab fa-facebook" aria-hidden="true" />
          <i className="fab fa-twitter" aria-hidden="true" />
        </span>
        <i className="fa fa-copyright" aria-hidden="true"></i> <span>2020</span>
      </div>
    </>
  );
}
