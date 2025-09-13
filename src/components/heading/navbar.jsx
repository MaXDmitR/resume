import Logo from "./logo";
import NavButton from "./nav_button";
import React, { useState, useEffect } from 'react';
import { HiArrowCircleUp } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import scrollToTop from '../../scripts/scrollToTop';




const Navbar = (props) => {



    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg fixed-top pb-4 pt-4">
            <div className="container-fluid">
                <Logo />

                <button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars style={{ color: "grey", fontSize: "28px" }} />
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {props.buttons.map(button =>
                            <NavButton key={button.name} link={button.link} name={button.name}></NavButton>)}
                    </ul>
                </div>
            </div>
            {isVisible && <HiArrowCircleUp onClick={() => scrollToTop()} className="scroll-to-top-btn" />}

        </nav>
    );
};

export default Navbar;
