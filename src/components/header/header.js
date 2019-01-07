import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

import FontAwesome from "react-fontawesome";
import SideNav from "./sidenav/sidenav";

const Header = (props) => {
  const logo = () => {
    return (
      <Link to="/">
        <img src="/images/nba_logo.png" alt="nba logo" className="logo" />
      </Link>
    );
  };
  const navBars = () => {
    return (
      <div className="bars">
        <FontAwesome
          name="bars"
          style={{
            color: "#dfdfdf",
            padding: "10px",
            cursor: "pointer"
          }}
          onClick={props.onOpenNav}
        />
      </div>
    );
  };
  return (
    <header className="header">
        <SideNav {...props}/>
      <div className="header_opt">
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
