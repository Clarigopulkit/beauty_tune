import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="hamberger">
        <MenuIcon/>
      </div>
        <div className="searchBar">
          <div className="searchIcon">
            <SearchIcon style={{ color: "rgb(8, 80, 68)" }} />
          </div>
        </div>
        <div className="navigation">
          <div className="nav">HOW IT WORKS</div>
          <div className="nav">INFLUENCER</div>
          <div className="nav">FOR CLINICS</div>
          <div className="nav">E-GIFTS</div>
        </div>
        <div className="account">
          <PersonOutlineIcon style={{ color: "rgb(8, 80, 68)" }} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
