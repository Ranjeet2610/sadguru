import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
      <a href="https://wa.link/lotus24x7" className="background-link" target="_blank" rel="noopener noreferrer"></a>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/* <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1> */}
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a href="https://wa.me/+919582844364" className="btn btn-custom btn-lg page-scroll" > get ur id here </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
