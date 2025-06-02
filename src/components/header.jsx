import React from "react";

export const Header = ({ data }) => {
  return (
    <header id="header">
      <div className="intro">
        <a
          href="https://wa.link/gf2aai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/GabbarBanner.webp"
            alt="Special Content Image"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
        <div className="overlay">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
