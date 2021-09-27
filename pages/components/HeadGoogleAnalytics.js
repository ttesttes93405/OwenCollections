import React from "react";
import Script from 'next/script'

export default function HeadGoogleAnalytics(props) {

  const id = "G-C7HBW8VNTZ";

  return (
    <>
      <Script
        strategy="beforeInteractive"
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />

      <Script
        id="headGoogleAnalytics"
      >
        {`
        // Google Analytics - in HeadGoogleAnalytics.js
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());

        gtag("config", "${id}");
        `}
      </Script>
    </>
  );
}