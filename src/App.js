//бібліотеки
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//стилі
import './styles/app.css';

//компоненти
import Navbar from "./components/heading/navbar";
import Header from "./components/heading/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

//сторінки
import About from "./pages/About";
import Contact from "./pages/Contacts.jsx" ;
import Achivments from "./pages/Achivments";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Навігаційна панель */}
        <Navbar buttons={[
          { name: 'головна', link: '/' },
          { name: 'про мене', link: '/about' },
          { name: 'досягнення', link: '/achivments' },
          { name: "зв'язатися", link: '/contact' }

        ]} />


        <Routes>
          <Route path="/" element={
            <>
              <Header />

              <Body cards={[
                {
                  title: 'TaskTracker', description: 'Лендинг з адаптивною версткою',
                  link: 'https://github.com/MaXDmitR/Tasktracker',
                  images: ['images/Tasktracker/tacktrecker3.jpg', 'images/Tasktracker/tacktrecker2.jpg', 'images/Tasktracker/tacktrecker1.jpg']
                },
                {
                  title: 'Electricity', description: 'Full-stack сайт для обчислення прибутку від сонячної електростанції',
                  link: 'https://github.com/MaXDmitR/electricity-accounting',
                  images: ['images/Electricity/electricity6.jpg', 'images/Electricity/electricity7.jpg', 'images/Electricity/electricity8.jpg', 'images/Electricity/electricity4.jpg']
                },
              ]} />

            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achivments" element={<Achivments />} />
          
        </Routes>



        {/* Футер */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
