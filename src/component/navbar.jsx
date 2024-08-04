import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand ">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCount}
        </span>
       </a>
    </nav>
  );
};

export default Navbar;
