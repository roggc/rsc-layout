import React from "react";
import { useSlice } from "../slices";

export default function MoreInfo({ data }) {
  const [count, setCount] = useSlice("count");
  return (
    <>
      <div>alias:{data.alias}</div>
      <div>likes: {data.likes}</div>
      <div>other: {data.other}</div>
      <div>email:{data.email}</div>
      <div>and the Counter (every app has a counter):</div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        {count}
      </div>
    </>
  );
}
