// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div style={{ padding: "20px", fontSize: "14px", textAlign: "center", background: "#f8f8f8" }}>
      Disclaimer:- This Website is only for 18+ users. If you are from Telangana, Orissa, Assam, Sikkim,Andhra Pradesh and Nagaland Please leave the website immediately. Be aware of fraudsters, we only deal via WhatsApp. We Only Promote Fantasy Sports. No Real Money Involvement.
      <br /><br />
      <a
        href="https://wa.link/y0c3ps"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.gtag_report_conversion()}
      >
        <img src="/1500x800.png" alt="Click" style={{ width: "100%", height: "auto" }} />
      </a>
    </div>
  );
};

export default Footer;
