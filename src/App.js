import React, { useState } from "react";
import './styles/app.css';
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Navbar buttons ={[
            {  name: 'Головна', link: '#'},
            {  name: 'Про мене', link: '#'},
            {  name: 'Досягнення', link: '#'},
            {  name: "Зв'язатися", link: '#'}

          ]}/>
      
      
    </div>
  );
}

export default App;
