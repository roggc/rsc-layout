import React from "react";
import MoreInfo from "../../client/components/more-info.js";

export default async function MoreInfoRSC({ name }) {
  const data = await new Promise((r) =>
    setTimeout(() => {
      switch (name) {
        case "Roger Gomez Castells":
          return r({
            alias: "roggc",
            likes: "eating pizza",
            other: "supporter for fcBarcelona",
            email: "roggc9@gmail.com",
          });
        default:
          return r({
            likes: "...",
            other: "...",
            alias: "foo",
            email: "foo@bar.com",
          });
      }
    }, 1000)
  );
  return <MoreInfo __isClient__="../components/more-info.js" data={data} />;
}
