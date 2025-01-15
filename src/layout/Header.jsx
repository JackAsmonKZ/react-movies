import React from "react";

export const Header = () => {
  return (
    <nav className="orange">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
