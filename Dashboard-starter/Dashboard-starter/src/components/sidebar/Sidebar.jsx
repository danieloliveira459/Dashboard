import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../imgs/home.svg';
import './Sidebar.css';

import { SidebarData } from "../../Data/Data";
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      
      {/* Logo */}
      <div className="logo">
        <Logo />
      </div>

      {/* Menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={selected === index ? "menuItem active" : "menuItem"}
              onClick={() => setSelected(index)}
            >
              <Icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <FiLogOut />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;