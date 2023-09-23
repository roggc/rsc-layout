import React from "react";
import RSC from "./rsc.js";
import L from "./link.js";
import { useNavigation } from "../hooks/index.js";
import styled from "styled-components";

export default function Layout() {
  const page = useNavigation();

  return (
    <Container>
      <Nav>
        <Link page={{ name: "home" }}>home</Link>
        <Link page={{ name: "foo" }}>foo</Link>
      </Nav>
      <RSC key={page.name} componentName={page.name} {...page.props}>
        <LoadingContainer>loading {page.name} page...</LoadingContainer>
      </RSC>
    </Container>
  );
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `gap: ${theme.gap}px;`}
  min-width:100px;
`;

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  height: 97vh;
`;

const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Link = styled(L)`
  padding: 10px;
`;
