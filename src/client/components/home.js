import React from "react";
import Code from "./code";
import styled from "styled-components";
import imgReact from "../assets/react.png";
import Image from "./image";
import { useSlice } from "../slices";

export default function Home() {
  const [count1, setCount1] = useSlice("count1");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");

  return (
    <Container>
      <Title>RSC</Title>
      <Image src={imgReact} maxWidth="600px" borderRadius="10px" />
      <Div>
        This is a setup for RSC (React Server Components) development, without
        SSR (Server Side Rendering).
      </Div>
      <Div>
        Another setup for RSC development with SSR can be found{" "}
        <a href="https://github.com/roggc/rsc-ssr" target="_blank">
          here
        </a>
      </Div>
      <Div>
        It has included{" "}
        <a href="https://styled-components.com/" target="_blank">
          styled-components
        </a>{" "}
        and{" "}
        <a href="https://react-context-slices.github.io/" target="_blank">
          react-context-slices
        </a>
        , a library to manage state that seamlessly integrates both Redux and
        React Context with zero-boilerplate
      </Div>
      <Counters>
        <div>
          <button onClick={() => setCount1((c) => c + 1)}>+</button>
          {count1}
        </div>
        <div>
          <button onClick={() => reduxDispatch(increment())}>+</button>
          {count2}
        </div>
      </Counters>
    </Container>
  );
}

const Div = styled.div`
  text-align: center;
`;

const Title = styled(Div)`
  font-size: 2rem;
  font-weight: 700;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Counters = styled.div`
  display: flex;
  gap: 10px;
`;
