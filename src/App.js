//бібліотеки
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//стилі
import './styles/app.css';

//компоненти
import Navbar from "./components/heading/navbar";
import Footer from "./components/footer/footer";

//сторінки
import About from "./pages/About";
import Contact from "./pages/Contacts.jsx";
import Achivments from "./pages/Achivments";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Навігаційна панель */}
        <Navbar buttons={[
          { name: 'головна', link: '/' },
          { name: 'про мене', link: '/about' },
          { name: 'досягнення', link: '/achivments' },
          { name: "зв'язатися", link: 'https://t.me/Max_Dmitrenko' }

        ]} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achivments" element={<Achivments />} />
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>

        {/* Футер */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
