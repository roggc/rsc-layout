import React from "react";
import styled from "styled-components";

export default function Ups() {
  return (
    <Container>
      Ups. Looks like you forgot to add the component name to the 'Router' RSC
      to handle it.
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
