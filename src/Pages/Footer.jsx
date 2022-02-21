import React from "react";
import logo from "../photos/download.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logoFooter">
          <div>
            <img src={logo} />
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
        <div className="company">
          <p className="company_heading">COMPANY</p>
          <ul className="company_list">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Contact Us</li>
            <li>For Provider</li>
            <li>For Customer</li>
          </ul>
        </div>
        <div className="resources">
          <p className="resources_heading">RESOURCES</p>
          <ul className="resources_list">
            <li>Help & Support</li>
            <li>Success Stories</li>
            <li>Rating & Reviews</li>
            <li>FAQ's</li>
            <li>Blog</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="followUs">
          <p className="followus_heading">FOLLOW US</p>
          <ul className="followus_list">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linked In</li>
          </ul>
        </div>
      </div>
      <div className="bottomFooter">2021 BT APP INC</div>
    </div>
  );
};

export default Footer;
