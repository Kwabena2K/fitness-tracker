import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-beige-200">
        <Signup />
        <Intro />
        <Content />
        <Footer />
        {/* Routing to Signup page */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
