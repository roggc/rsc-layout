import React from "react";
import RSC from "./rsc.js";

export default function Home({ name }) {
  return (
    <>
      <h1>Wellcome {name}</h1>
      <RSC componentName="message" name={name}>
        loading message ...
      </RSC>
    </>
  );
}
