import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';

const NavbarHome = () => {
    return (
        <div className="nav__parent">
            <div className="nav__container ex-container">
                <div className="nav__menu ex">
                    <ul>
                        <li>About</li>
                        <li>Discussion</li>
                        <li>Members</li>
                        <li>Course</li>
                        <li>Board</li>
                    </ul>
                </div>
                <SettingsIcon className='search-icon'></SettingsIcon>
            </div>
        </div>
    );
};

export default NavbarHome;