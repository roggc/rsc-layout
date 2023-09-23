import React from "react";
import RSC from "./rsc.js";
import Link from "./link.js";
import { useNavigation } from "../hooks/index.js";
import styled from "styled-components";

export default function Layout({ title }) {
  const page = useNavigation();

  return (
    <Container>
      <Nav>
        <Link page={{ name: "home" }}>home</Link>
      </Nav>
      <RSC key={page.name} componentName={page.name} {...page.props}>
        loading {page.name} page...
      </RSC>
    </Container>
  );
}

const Nav = styled.div`
  display: flex;
  ${({ theme }) => `gap: ${theme.gap}px;`}
`;

const Container = styled.div`
  font-family: sans-serif;
`;
