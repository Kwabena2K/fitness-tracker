import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Register from "./components/Register";

function App() {
  return (
    <div className="App bg-beige-200">
      <Signup />
      <Intro />
      <Content />

      {/* Routing */}
      <Routes>
        <Route path="/register" component={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
