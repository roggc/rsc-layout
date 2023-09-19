import React from "react";
import About from "../../client/components/about.js";

export default async function AboutRSC({ author }) {
  const data = await new Promise((r) =>
    setTimeout(() => {
      switch (author) {
        case "Roger Gomez Castells":
          return r({ age: 46, location: "Barcelona" });
        default:
          return r({ age: 0, location: "Wonderland" });
      }
    }, 1000)
  );
  return (
    <About __isClient__="../components/about.js" data={data} author={author} />
  );
}
