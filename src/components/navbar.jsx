import Logo from "./logo";
import NavButton from "./nav_button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Logo />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavButton name="Home" link="#" active />
            <NavButton name="Features" link="#" />
            <NavButton name="Pricing" link="#" />
            <NavButton name="Disabled" link="#" disabled />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
