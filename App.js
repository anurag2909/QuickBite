// const heading = React.createElement("h1",{id: "heading" , xyz: "abc"},"Hello world from React!"); // This takes 3 parameters
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is H1 Tag!"),
    React.createElement("h2", {}, "This is H2 Tag!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
