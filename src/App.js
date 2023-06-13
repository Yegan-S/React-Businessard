import React from "react";
import Info from "./Info";
import About from "./About";
import Footer from "./Footer";

import './App.css';

export default function App() {
  return (
    <div className="App-container">
      <Info />
      <About/>
      <Footer/>
      
    </div>
  );
}
