import React from "react";
import RSC from "./rsc.js";
import Link from "./link.js";
import { useNavigation } from "../hooks/index.js";
import styled from "styled-components";

export default function Layout({ title }) {
  const page = useNavigation();

  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <Body>
        <Nav>
          <Link page={{ name: "home" }}>home</Link>
          <Link
            page={{
              name: "about",
              props: { author: "Roger Gomez Castells" },
            }}
          >
            about
          </Link>
        </Nav>
        <RSC key={page.name} componentName={page.name} {...page.props}>
          loading {page.name} page...
        </RSC>
      </Body>
    </html>
  );
}

const Nav = styled.div`
  display: flex;
  ${({ theme }) => `gap: ${theme.gap}px;`}
`;

const Body = styled.body`
  font-family: sans-serif;
`;
