import React from "react";

export const Header = (props) => {
  const handleWhatsAppClick = () => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion("https://wa.link/0fdcfh");
    } else {
      console.warn("Google Ads tag not loaded yet");
      window.location.href = "https://wa.link/0fdcfh";
    }
  };

  return (
    <header id="header">
      <div
        className="intro"
        style={{ cursor: "pointer" }}
        onClick={handleWhatsAppClick}
      >
        <a
          href="https://wa.link/0fdcfh"
          className="background-link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", width: "100%", height: "100%" }}
        ></a>
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
