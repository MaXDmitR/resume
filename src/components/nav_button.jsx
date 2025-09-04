import React from 'react'

const NavButton = ({ name, link}) => {
  

  return (
    <li className="nav-item">
      <a className="nav-link"  href={link}>
        {name}
      </a>
    </li>
  );
};

export default NavButton;
