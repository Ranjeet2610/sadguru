import React from "react";

export const Header = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion("https://wa.link/q1thbi");
    } else {
      window.location.href = "https://wa.link/q1thbi";
    }
  };

  return (
    <header id="header">
      <div className="intro">
        <a
          href="https://wa.link/q1thbi"
          className="background-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
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
