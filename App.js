// const heading = React.createElement("h1",{id: "heading" , xyz: "abc"},"Hello world from React!"); // This takes 3 parameters
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react"; // This is coming from node_modules
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namastey React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const elem = <h1> Hello everyone!</h1>

const title = <h1 className="head">{elem} Namastey React using JSX</h1>;

const Heading = () => (
  <div id="container">
    {title}
    <h1> Namastey React using Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
