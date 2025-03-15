import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <a href="https://wa.link/6ppkwz" target="_blank" rel="noopener noreferrer"></a>
      <div className="intro">
      <a href="https://wa.link/6ppkwz" target="_blank" rel="noopener noreferrer"></a>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a href="https://wa.link/6ppkwz" className="btn btn-custom btn-lg page-scroll" > get ur id here </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
