// Load Google Ads global site tag
export const loadGtag = () => {
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

    // Attach conversion function
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
