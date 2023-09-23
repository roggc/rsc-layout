import React from "react";
import HomeRSC from "./home-rsc.js";
import RCC from "./rcc.js";
import HowThisSetupWorksRSC from "./how-this-setup-works-rsc.js";

export default async function Router({ url, body: { props } }) {
  switch (url.pathname.slice(1)) {
    case "home":
      return <HomeRSC {...props} />;
    case "how-this-setup-works":
      return <HowThisSetupWorksRSC {...props} />;
    default:
      return <RCC __isClient__="../components/ups.js" />;
  }
}
