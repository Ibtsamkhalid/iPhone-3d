import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";


const navItems=["Store","Mac","Ipad","Iphone","Watch","Airpods","TV","Entertainment","Accessories","Support"];
function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          {navItems.map((item)=>(
            <li><a className="link-styled">{item}</a></li>
          ))}
          <li>
            <img src={Search} alt="Search"/>
          </li>
          <li>
            <img src={Store} alt="Search"/>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
