// const heading = React.createElement("h1",{id: "heading" , xyz: "abc"},"Hello world from React!"); // This takes 3 parameters
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react"; // This is coming from node_modules
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namastey React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const JsxHeading = <h1 id = "heading" > Namastey React using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JsxHeading);



