import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import React from "react";

const Code = ({ children, ...props }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark} {...props}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
