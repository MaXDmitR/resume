import React, { useState } from "react";
import './styles/app.css';
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Navbar buttons ={[
            {  name: 'головна', link: '#'},
            {  name: 'про мене', link: '#'},
            {  name: 'досягнення', link: '#'},
            {  name: "зв'язатися", link: '#'}

          ]}/>
      
      
    </div>
  );
}

export default App;
