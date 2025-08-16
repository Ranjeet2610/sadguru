// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div id="specialContentArea">
      <a href="https://wa.link/0fdcfh" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag_report_conversion()}>
        <img src="/img/a.webp" alt="Special Content" style={{ width: "100%", height: "auto" }} />
        <img src="/img/click.jpg" alt="Click" style={{ width: "100%", height: "auto" }} />
      </a>
    </div>
  );
};

export default Header;
