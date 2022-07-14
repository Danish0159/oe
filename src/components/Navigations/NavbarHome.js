import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";


const NavbarHome = () => {
  return (
    <div className="nav__parent">
      <div className="nav__container">
        <Link className="navbar__logo" to="/">
          Logo
        </Link>

        <div className="nav__menu">
          <ul>
            <li>Explore</li>
            <li>Classrooms</li>
            <li>Create</li>
          </ul>
        </div>

        <div className='nav__search'>
          <input
            type="text"
            placeholder='Search'
          >
          </input>
          <SearchIcon className='icon'></SearchIcon>
        </div>

        <Avatar style={{ backgroundColor: "#000000", }}></Avatar>
      </div>
    </div>
  );
};

export default NavbarHome;
