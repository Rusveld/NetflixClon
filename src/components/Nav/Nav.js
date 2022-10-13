import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          alt="netflix logo"
        />
        <img
          className="nav__avatar"
          src="https://preview.redd.it/dh5otp8kcf741.png?width=640&auto=webp&s=3a3336e0d93d9b41518662318cf7e7e06edfcb7d"
          alt="avatar logo"
        />
      </div>
    </div>
  );
}

export default Nav;
