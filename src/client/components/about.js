import React, { useState } from "react";
import RSC from "./rsc.js";

export default function About({ data, author }) {
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  return (
    <>
      <div>This is a setup bla bla bla ...</div>
      <div>About the author:</div>
      <div>age: {data.age}</div>
      <div>location: {data.location}</div>
      <div>name: {author}</div>
      <div>
        <button onClick={() => setIsMoreInfo(true)}>More Info</button>
      </div>
      {isMoreInfo && (
        <RSC componentName="more-info" name={author}>
          loading more info about {author}...
        </RSC>
      )}
    </>
  );
}
