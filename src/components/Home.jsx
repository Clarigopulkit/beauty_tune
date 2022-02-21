import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import iimage from "./photos/iimage.png";
import faceTreatmentLogo from "./photos/faceTreatmentLogo.png";
import girl1 from "./photos/girl.png";
import girl2 from "./photos/girl2.png";
import girl3 from "./photos/girl3.png";
import girl4 from "./photos/girl4.png";
import content_contributor from "./photos/content_contributor.png";
import ccgirl1 from "./photos/ccgirl1.png";
import ccgirl2 from "./photos/ccgirl2.png";
import ccgirl3 from "./photos/ccgirl3.png";
import ccgirl4 from "./photos/ccgirl4.png";
import BTlogo from "./photos/BTlogo.png";
import girl5 from "./photos/girl5.png";
import influencerLogo from "./photos/influencerLogo.png";
import hairtreatmentLogo from "./photos/hairtreatmentLogo.png";
import HTgirl1 from "./photos/HTgirl1.png";
import HTgirl2 from "./photos/HTgirl2.png";
import HTgirl3 from "./photos/HTgirl3.png";
import magazine from "./photos/magazine.png";
import skinTreatmentLogo from "./photos/skinTreatmentLogo.png";
import STgirl1 from "./photos/STgirl1.png";
import STgirl2 from "./photos/STgirl2.png";
import STgirl3 from "./photos/STgirl3.png";
import STgirl4 from "./photos/STgirl4.png";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <div className="coverPhoto">
          <div className="coverTextBox">
            <div className="coverText">
              <div>
                We delight in the beauty of the butterfly, but rarely admit the
                changes it has gone through to achieve that beauty.
              </div>
              <div className="coverSign">Maya Angeleu</div>
              <div>
                <button className="coverPhotobtn">Sign in</button>
              </div>
            </div>
          </div>
        </div>
        <div className="infoDiv">
          <div className="infoDivInnerBox">
            <img src={iimage} className="infoDivIImage"></img>
            <p className="loremIP">Lorem Ip Step 1</p>
            <p className="loremtext">
              Lorem Ipsum has been the industry's standard dummy text ever
              1500s,
            </p>
          </div>
          <div className="infoDivInnerBox">
            <img src={iimage} className="infoDivIImage"></img>
            <p className="loremIP">Lorem Ip Step 1</p>
            <p className="loremtext">
              Lorem Ipsum has been the industry's standard dummy text ever
              1500s,
            </p>
          </div>
          <div className="infoDivInnerBox">
            <img src={iimage} className="infoDivIImage"></img>
            <p className="loremIP">Lorem Ip Step 1</p>
            <p className="loremtext">
              Lorem Ipsum has been the industry's standard dummy text ever
              1500s,
            </p>
          </div>
          <div className="infoDivInnerBox">
            <img src={iimage} className="infoDivIImage"></img>
            <p className="loremIP">Lorem Ip Step 1</p>
            <p className="loremtext">
              Lorem Ipsum has been the industry's standard dummy text ever
              1500s,
            </p>
          </div>
        </div>
        <div className="faceTreatment">
          <div className="faceTreatmentInnerDiv">
            <div className="FTtopDiv">
              <div className="FTtopDiv1">
                <img
                  src={faceTreatmentLogo}
                  className="faceTreatmentLogo"
                ></img>
              </div>
              <div className="FTtopDiv2">
                <button className="FTtopDivBtn">
                  <Link
                    to="/facetreatment"
                    className="face_treatment_view_allBtn"
                  >
                    View All
                  </Link>
                </button>
              </div>
            </div>
            <div className="FTbottomDiv">
              <div className="FTbottomInnerDiv">
                <div className="FTbottomInnerDivImgBox">
                  <img className="FTbottomInnerDivImg" src={girl1}></img>
                  <p className="FTbottomInnerDivP"> Nose</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="FTbottomInnerDivImgBox">
                  <img className="FTbottomInnerDivImg" src={girl2}></img>
                  <p className="FTbottomInnerDivP">Dental</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="FTbottomInnerDivImgBox">
                  <img className="FTbottomInnerDivImg" src={girl3}></img>
                  <p className="FTbottomInnerDivP">Lips</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="FTbottomInnerDivImgBox">
                  <img className="FTbottomInnerDivImg" src={girl4}></img>
                  <p className="FTbottomInnerDivP">Face-Skin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ContentContributor">
          <div className="CCInnerDiv">
            <div className="CCtopDiv">
              <div className="FTtopDiv1">
                <img src={content_contributor} className="CCLogo"></img>
              </div>
              <div className="FTtopDiv2">
                <button className="FTtopDivBtn">View All</button>
              </div>
            </div>
            <div className="CCbottomDiv">
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl1}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl2}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl3}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl4}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyTreatment">
          <div className="bodyTreatmentImgBox">
            <div className="BTline1"></div>
            <div className="BTlogo">
              <img src={BTlogo}></img>
            </div>
            <div className="BTline1"></div>
          </div>
          <div className="BTflexbox">
            <div className="BTtopdiv">
              <div className="BTtopinnerdiv"></div>
            </div>
            <div className="BTmiddlediv">
              <div className="BTmiddleinnerdiv">
                <p></p>
                <p></p>
                <div></div>
              </div>
            </div>
            <div className="BTbottomdiv">
              <div className="BTbottominnerdiv"></div>
            </div>
          </div>
          <div className="BTbottonDiv">
            <button className="BTbutton">View All Body Treatment</button>
          </div>
        </div>
        <div className="influencer">
          <div className="CCInnerDiv">
            <div className="CCtopDiv">
              <div className="FTtopDiv1">
                <img src={influencerLogo} className="CCLogo"></img>
              </div>
              <div className="FTtopDiv2">
                <button className="FTtopDivBtn">View All</button>
              </div>
            </div>
            <div className="CCbottomDivInfluencer">
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl1}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl2}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl3}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={ccgirl4}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
              <div className="FTbottomInnerDiv">
                <div className="CCbottomInnerDivImgBox">
                  <img className="CCbottomInnerDivImg" src={girl5}></img>
                  <p className="FTbottomInnerDivP">Lorem Ispum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hairTreatment">
          <div className="bodyTreatmentImgBox">
            <div className="BTline1"></div>
            <div className="BTlogo">
              <img src={hairtreatmentLogo}></img>
            </div>
            <div className="BTline1"></div>
          </div>
          <div className="bodyTreatmentbox"></div>
        </div>
        <div className="magazine">
          <div className="magazineImgBox">
            <div className="BTline1"></div>
            <div className="BTlogo">
              <img src={magazine}></img>
            </div>
            <div className="BTline1"></div>
          </div>
          <div className="brandName"></div>
        </div>
        <div className="skintreatment">
          <div className="faceTreatment">
            <div className="faceTreatmentInnerDiv">
              <div className="FTtopDiv">
                <div className="FTtopDiv1">
                  <img
                    src={skinTreatmentLogo}
                    className="faceTreatmentLogo"
                  ></img>
                </div>
                <div className="FTtopDiv2">
                  <button className="FTtopDivBtn">View All</button>
                </div>
              </div>
              <div className="FTbottomDiv">
                <div className="FTbottomInnerDiv">
                  <div className="FTbottomInnerDivImgBox">
                    <img className="FTbottomInnerDivImg" src={STgirl1}></img>
                    <p className="FTbottomInnerDivP">Acne</p>
                  </div>
                </div>
                <div className="FTbottomInnerDiv">
                  <div className="FTbottomInnerDivImgBox">
                    <img className="FTbottomInnerDivImg" src={STgirl2}></img>
                    <p className="FTbottomInnerDivP">Pigmentation Removal</p>
                  </div>
                </div>
                <div className="FTbottomInnerDiv">
                  <div className="FTbottomInnerDivImgBox">
                    <img className="FTbottomInnerDivImg" src={STgirl3}></img>
                    <p className="FTbottomInnerDivP">Wrinkle</p>
                  </div>
                </div>
                <div className="FTbottomInnerDiv">
                  <div className="FTbottomInnerDivImgBox">
                    <img className="FTbottomInnerDivImg" src={STgirl4}></img>
                    <p className="FTbottomInnerDivP">Psoriasis Ezema</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
