import React from "react";
import { useState } from "react";
import * as FiIcons from "react-icons/fi";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menubar">
          <FiIcons.FiMenu onClick={showSidebar} className="iconmenu" />
        </Link>
      </div>

      <nav className={sidebar ? "sidebarmenu active" : "sidebarmenu"}>
        <ul onClick={showSidebar} className="navmenuitems">
          <li className="navtoggle">
            <Link to="#" className="menubar">
              <FiIcons.FiX className="closemenu" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
