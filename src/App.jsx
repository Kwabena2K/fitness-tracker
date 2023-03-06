import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Login from "./components/Login";

function App() {
  return (
    <div className="App bg-beige-200">
      <Login />
      <Intro />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
