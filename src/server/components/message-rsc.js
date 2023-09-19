import React from "react";
import Message from "../../client/components/message.js";

export default async function MessageRSC({ name }) {
  const message = await new Promise((r) =>
    setTimeout(
      () => r(`You can do awesome things with this setup ${name}`),
      1000
    )
  );
  return <Message __isClient__="../components/message.js" message={message} />;
}
