import Logo from "./logo";
import NavButton from "./nav_button";


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top pb-4 pt-4">
            <div className="container-fluid">
                <Logo />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {props.buttons.map(button =>
                            <NavButton key={button.name} link={button.link} name={button.name}></NavButton>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
