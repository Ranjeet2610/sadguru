import React from "react";

export const Header = ({ data }) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <a
            href="https://wa.link/gf2aai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", width: "100%", height: "100%" }}
          >
            {/* Entire intro section is now clickable */}
          </a>
        </div>
      </div>
    </header>
  );
};
