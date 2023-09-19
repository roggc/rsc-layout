import { fillJSXwithClientComponents, parseJSX } from "./utils/index.js";
import { createRoot } from "react-dom/client";

async function getInitialClientJSX() {
  const clientJSX = JSON.parse(
    JSON.stringify(window.__INITIAL_CLIENT_JSX_STRING__),
    parseJSX
  );
  return await fillJSXwithClientComponents(clientJSX);
}

createRoot(document).render(await getInitialClientJSX());
