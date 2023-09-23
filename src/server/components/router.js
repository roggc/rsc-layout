import React from "react";
import HomeRSC from "./home-rsc.js";
import RCC from "./rcc.js";

export default async function Router({ url, body: { props } }) {
  switch (url.pathname.slice(1)) {
    case "home":
      return <HomeRSC {...props} />;
    default:
      return <RCC __isClient__="../components/ups.js" />;
  }
}
