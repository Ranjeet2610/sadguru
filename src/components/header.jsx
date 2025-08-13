import React from "react";

export const Header = (props) => {
  const handleIntroClick = (e) => {
    e.preventDefault(); // Stop instant navigation

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17453639828/cTbhCfIH64UbEJTrXyJB',
        event_callback: () => {
          window.location.href = "https://wa.link/0fdcfh";
        }
      });
    } else {
      // Fallback if gtag isn't loaded
      window.location.href = "https://wa.link/0fdcfh";
    }

    // Safety redirect if event_callback doesn’t trigger
    setTimeout(() => {
      window.location.href = "https://wa.link/0fdcfh";
    }, 800);
  };

  return (
    <header id="header">
      <div className="intro">
        <a
          href="https://wa.link/0fdcfh"
          className="background-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleIntroClick}
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
