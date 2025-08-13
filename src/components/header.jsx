import React from "react";

export const Header = (props) => {
  const handleIntroClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17453639828/cTbhCfIH64UbEJTrXyJB'
      });
    }
  };

  return (
    <header id="header">
      <div className="intro">
        <a
          href="https://wa.link/0fdcfh"
          className="background-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleIntroClick} // Fire conversion when clicked
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
