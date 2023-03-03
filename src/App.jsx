import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen">
      <Intro />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
