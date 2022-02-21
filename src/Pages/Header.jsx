import React from 'react'
 import image from "../photos/header_image.png"
// import backgroundImage from "../photos/login.png";

const Header = () => {
  return (
    <>  
    <div>
        <header className="header">
          <h6 className="header_font">
            Find a Covid-19 vaccine appointment.
            <a href="#" className="bookAppoint">
              Book appointment
            </a>
          </h6>
        </header>
        <div className="beautyTune">
          <div className="beautytone_image">
            <img src={image} />
          </div>
        </div>
      </div>
</>
  )
}

export default Header