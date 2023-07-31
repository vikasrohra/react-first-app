import React from "react";
import ReactDOM from "react-dom/client";

// React Element - single line
const title1 = <h1>This is a single line React element</h1>;
// React Element - multi line
const title2 = <h1>This is a multi line React element</h1>;
// React functional component
const Title3 = () => {
    return (
        <h1>This is a React Functional Component</h1>
    );
}
// React functional component
const Title4 = () => (
    <h1>This is another React Functional Component</h1>
);
// React functional component
const Title5 = () => {
    return <h1>Yet another React Functional Component</h1>
};
// Component inside another component => Composing component
const Container = () => {
  return (
    <>
      <h1 id="container">Namaste React</h1>
      {title1}
      {title2}
      <Title3 />
      {Title4()}
      <Title5 />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
