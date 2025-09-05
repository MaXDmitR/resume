import React, { useState } from "react";
import './styles/app.css';
import Navbar from "./components/heading/navbar";
import Header from "./components/heading/header";


function App() {
  return (
    <div className="App">
      <Navbar buttons ={[
            {  name: 'головна', link: '#'},
            {  name: 'про мене', link: '#'},
            {  name: 'досягнення', link: '#'},
            {  name: "зв'язатися", link: '#'}

          ]}/>
      
      <Header/>
    </div>
  );
}

export default App;
