// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div id="specialContentArea">
      
  <a
  href="https://wa.link/ja4zh5"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17490322182/prnfCKijgIobEIbGhJRB'
    });
  }}
>

        <img src="/a.jpg" alt="Special Content" style={{ width: "100%", height: "auto" }} />
        <img src="/click.jpg" alt="Click" style={{ width: "100%", height: "auto" }} />
      </a>
    </div>
  );
};

export default Header;
