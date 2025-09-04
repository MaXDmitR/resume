import React, { useState } from "react";
import './styles/app.css';
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <h1>Мій сайт-резюме</h1>
      </div>
    </div>
  );
}

export default App;
