// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div id="specialContentArea">
      
  <a
  href="https://wa.link/n2p523"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17484559097/BSicCNvu1okbEPnlpJFB'
    });
  }}
>

        <img src="/img/a.webp" alt="Special Content" style={{ width: "100%", height: "auto" }} />
        <img src="/img/click.jpg" alt="Click" style={{ width: "100%", height: "auto" }} />
      </a>
    </div>
  );
};

export default Header;
