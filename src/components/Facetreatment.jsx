import React from "react";
import Navbar from "../Pages/Navbar";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import "./home.css";
import "./facetreatment.css";
import girl1 from "./photos/girl2.png";
import FTgirl2 from "./photos/FTgirl2.png";
import FTgirl3 from "./photos/FTgirl3.png";
import FTgirl4 from "./photos/FTgirl4.png";
import girl4 from "./photos/girl4.png";

const Facetreatment = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="FtBox">
        <div className="FTcoverPhoto">
          <div className="coverTextBox">
            <div className="coverText">
              <div className="covertextinfo">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div>
                <button className="coverPhotobtn">Sign in</button>
              </div>
            </div>
          </div>
        </div>
        <div className="ftmultipleflexbox">
          <div className="flexboxmarginbox">
            <div className="flexboxes">
              <div className="alernateflex1">
                <div className="imagebox">
                  <img src={girl1} className="girlimg"></img>
                </div>
              </div>
              <div className="flex2">
                <div className="flex2innerdiv">
                  <p>Dental</p>
                </div>
              </div>
              <div className="flex3"></div>
            </div>
            <div className="flexboxes">
              <div className="flex3"></div>
              <div className="flex2">
                <div className="flex2innerdiv">
                  <p>Ears</p>
                </div>
              </div>
              <div className="alernateflex1">
                <div className="imagebox">
                  <img src={FTgirl2} className="girlimg"></img>
                </div>
              </div>
            </div>
            <div className="flexboxes">
              <div className="alernateflex1">
                <div className="imagebox">
                  <img src={FTgirl3} className="girlimg"></img>
                </div>
              </div>
              <div className="flex2">
                <div className="flex2innerdiv">
                  <p>Eyebrows</p>
                </div>
              </div>
              <div className="flex3"></div>
            </div>
            <div className="flexboxes">
              <div className="flex3"></div>
              <div className="flex2">
                <div className="flex2innerdiv">
                  <p>Eyes</p>
                </div>
              </div>
              <div className="alernateflex1">
                <div className="imagebox">
                  <img src={FTgirl4} className="girlimg"></img>
                </div>
              </div>
            </div>
            <div className="flexboxes">
              <div className="alernateflex1">
                <div className="imagebox">
                  <img src={girl4} className="girlimg"></img>
                </div>
              </div>
              <div className="flex2">
                <div className="flex2innerdiv">
                  <p>Face-Skin</p>
                </div>
              </div>
              <div className="flex3"></div>
            </div>
            <div className="btnBox">
                <button className="FTbtn">View More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Facetreatment;
