import React from "react";

export const Header = (props) => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.gtag_report_conversion("https://wa.link/0fdcfh");
  };

  return (
    <header id="header">
      <div className="intro" onClick={handleWhatsAppClick} style={{ cursor: "pointer" }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
