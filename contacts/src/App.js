import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import "./App.css";

const Button = styled.button`
  ${tw`bg-blue-300 text-yellow-500 px-8 m-8 rounded h-20 text-3xl`}
`;

function App() {
  return (
    <div className="app">
      <div className="header">Header</div>
      <div className="main">Main</div>
      <div className="aside">
        <div>Aside</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
