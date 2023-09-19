import React from "react";
import HomeRSC from "./home-rsc.js";
import AboutRSC from "./about-rsc.js";
import MoreInfoRSC from "./more-info-rsc.js";
import Provider from "../../client/slices.js";
import Layout from "../../client/components/layout.js";
import MessageRSC from "./message-rsc.js";
import ThemeProvider from "../../client/components/theme-provider.js";
import theme from "../../client/theme.js";

const title = "My incredible app";

export default async function Router({ url }) {
  const props = JSON.parse(url.searchParams.get("props"));

  switch (url.pathname) {
    case "/":
      return (
        <ThemeProvider
          __isClient__="../components/theme-provider.js"
          theme={theme}
        >
          <Provider __isClient__="../slices.js">
            <Layout __isClient__="../components/layout.js" title={title} />
          </Provider>
        </ThemeProvider>
      );
    case "/home":
      return <HomeRSC {...props} />;
    case "/about":
      return <AboutRSC {...props} />;
    case "/more-info":
      return <MoreInfoRSC {...props} />;
    case "/message":
      return <MessageRSC {...props} />;
    default:
      return <HomeRSC {...props} />;
  }
}
