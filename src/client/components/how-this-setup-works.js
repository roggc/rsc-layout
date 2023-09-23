import React from "react";
import styled from "styled-components";
import C from "./code";

export default function HowThisSetupWorks() {
  return (
    <Container>
      <Div>
        In this setup you first, for example, define an RCC (React Client
        Component)
      </Div>
      <Div>
        Then you should define the corresponding RSC to this RCC. Let's say you
        defined 'SomeComponent' RCC. Then you should define an RSC named
        'SomeComponentRSC'
      </Div>
      <Code>{`
    // I am a RCC. I am located in the 'src/client/components' folder.
    import React from "react";

    export default function SomeComponent({name}){
      return <>hi {name}</>;
    }
    `}</Code>
      <Code>{`
    // I am a RSC. I am located in the 'src/server/components' folder, and I am async.
    import React from "react";
    import RCC from "./rcc.js"

    export default async function SomeComponentRSC(){
      const name = await new Promise(r => setTimeout(() => r("Roger"), 1000));
      return <RCC __isClient__="../components/some-component.js" name={name} />
    }
    `}</Code>
      <Div>
        Then in the 'Router' RSC you should add the name of the component in the
        switch statement:
      </Div>
      <Code>{`
    // I am a RSC ...
    export default async function Router({ url, body: { props } }) {
      switch (url.pathname.slice(1)) {
        case "home":
          return <HomeRSC {...props} />;
        case "how-this-setup-works":
          return <HowThisSetupWorksRSC {...props} />;
        case "some-component":
          return <SomeComponentRSC {...props} />;
        default:
          return <RCC __isClient__="../components/ups.js" />;
      }
    }
    `}</Code>
      <Div>Finally you should "call" your RSC from a RCC like this:</Div>
      <Code>{`
    // I am a RCC
    import React from "react";
    import RSC from "./rsc.js";

    export default function SomeRCC(){
      return <RSC componentName="some-component">loading ...</RSC>;
    }
    `}</Code>
      <Div>'RSC' itself is a RCC, a special one. This is its definition:</Div>
      <Code>{`
    // I am a RCC. I am located in the 'src/client/components' folder.
    import React, { useEffect } from "react";
    import { fillJSXwithClientComponents, parseJSX } from "../utils/index.js";
    
    export default function RSC({ componentName, children, ...props }) {
      const [JSX, setJSX] = React.useState(children);
      const body = JSON.stringify({ props });
    
      useEffect(() => {
        setJSX(children);
        fetch(\`/\${componentName}\`, {
          method: "post",
          headers: { "content-type": "application/json" },
          body,
        }).then(async (response) => {
          const clientJSXString = await response.text();
          const clientJSX = JSON.parse(clientJSXString, parseJSX);
          const fixedClientJSX = await fillJSXwithClientComponents(clientJSX);
          setJSX(fixedClientJSX);
        });
      }, [componentName, body]);
    
      return JSX;
    }    
    `}</Code>
      <Div>And this is the definition of 'RCC' RSC, found before:</Div>
      <Code>{`
    // I am a RSC. I am located in the 'src/server/components' folder.
    export default async function RCC() {
      return null;
    }
    `}</Code>
      <Div>As you can see it does nothing.</Div>
    </Container>
  );
}

const Div = styled.div`
  text-align: center;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const Code = styled(C)`
  overflow: unset !important;
`;
