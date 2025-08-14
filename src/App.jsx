import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

// Smooth scroll
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// Google Ads gtag loader
const loadGtag = () => {
  if (document.getElementById("google-ads-script")) return; // prevent duplicates

  const script = document.createElement("script");
  script.id = "google-ads-script";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17453639828";
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "AW-17453639828");

    // Conversion tracking function
    window.gtag_report_conversion = (url) => {
      const callback = () => {
        if (url) {
          window.location = url;
        }
      };
      gtag("event", "conversion", {
        send_to: "AW-17453639828/cTBhCIfH64UbEJTRxYJB",
        value: 1.0,
        currency: "INR",
        event_callback: callback
      });
      return false;
    };
  };
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    // Load landing page data
    setLandingPageData(JsonData);

    // Load Google Ads tag
    loadGtag();

    // Disable touch interactions
    document.body.style.touchAction = "pan-y";

    return () => {
      document.body.style.touchAction = "auto";
    };
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
