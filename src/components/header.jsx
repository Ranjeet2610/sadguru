import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <a
        href="https://wa.link/8efilt"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none" }} // Optional style reset
      >
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  {/* <div className="btn btn-custom btn-lg page-scroll">
                    get ur id here
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </header>
  );
};
