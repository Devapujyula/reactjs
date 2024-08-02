import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => ReactElement (Object) =>  HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React course..."
);

// JSX Comes into play
// JSX - is not the HTML it's is HTML or XML  like syntax
// JSX => Babel transpile it to React.createElement => ReactElement_JS Object =>HTMLElement(render)
// JSX- transpile before it reaches the JS Engine - Parcel - Babel
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

// React Component
// Class Based Components - OLD
// Functional Components - NEW

// React Functional Component

const elem = <span>ReactElement</span>;

const title = (
  <h1 className="head">
    {elem}
    Using Component
  </h1>
);

const number = 10000;

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="header">Namaste React Functional Component🚀</h1>
      <h2>{number}</h2>
      <h3>{title}</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);
root.render(<HeadingComponent />);
