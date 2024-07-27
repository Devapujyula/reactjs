const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world... Welcome to ReactJS"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
