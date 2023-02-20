// import helloWorld from "./hello-world.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading.js";
// import _ from "lodash";

import React from "react";

const heading = new Heading();
heading.render("hello world");

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

// helloWorld();
// addImage();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}
