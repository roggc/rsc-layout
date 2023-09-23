import express from "express";
import { renderToPipeableStream } from "react-dom/server";
import Router from "./components/router.js";
import { renderJSXToClientJSX, stringifyJSX } from "./utils/index.js";
import React from "react";

const app = express();
app.use(express.static("public"));

app.get("/favicon.ico", (req, res, next) => {
  res.end("");
});

app.use(async (req, res, next) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname === "/") {
      const { pipe } = renderToPipeableStream(
        <html>
          <head>
            <title>my app</title>
          </head>
          <body>
            <div id="myapp"></div>
          </body>
        </html>,
        {
          bootstrapModules: ["src/client/index.js"],
          onShellReady() {
            res.setHeader("content-type", "text/html");
            pipe(res);
          },
        }
      );
    } else {
      const clientJSX = await renderJSXToClientJSX(<Router url={url} />);
      const clientJSXString = JSON.stringify(clientJSX, stringifyJSX);
      res.setHeader("Content-Type", "application/json");
      res.end(clientJSXString);
    }
  } catch (err) {
    next(err);
  }
});

app.use(function (err, req, res) {
  console.error(err);
  res.status(err.status || 500);
  res.end();
});

const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
