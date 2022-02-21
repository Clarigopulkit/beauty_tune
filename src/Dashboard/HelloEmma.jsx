import React from "react";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import Navabr from "../Pages/Navbar"
import "./helloEmma.css";
import starRating from "../photos/fourStar.jpg";
import {Link, useNavigate} from "react-router-dom";



const HelloEmma = () => {
  const navigate = useNavigate();


  const handlelastestQuotes = () => {
        navigate("./LastestQuotes")
  }



  return (
    <>
      <Header />
      <Navabr/>
      <div className="body">
        <div className="bodyHeader">
          <div className="helloEmma_dashboard">
            <h6>Dashboard</h6>
            <div className="helloEmma">Hello Emma</div>
          </div>
          <div className="postRequest">
            <button className="postRequestButton">Post Request</button>
          </div>
        </div>
        <div className="gridBody">
          <div className="active">
            <div className="active_para">
              <p>4 Acitve</p>
              <p>Total Results</p>
            </div>
            <div className="active_img_box">
              <div className="active_img"></div>
            </div>
          </div>
          <div className="active">
            <div className="active_para">
              <p>4 Acitve</p>
              <p>Total Results</p>
            </div>
            <div className="active_img_box">
              <div className="active_img"></div>
            </div>
          </div>
          <div className="active">
            <div className="active_para">
              <p>4 Acitve</p>
              <p>Total Results</p>
            </div>
            <div className="active_img_box">
              <div className="active_img"></div>
            </div>
          </div>
          <div className="recommended_article">
            <div className="recommended_article_header">
              <div className="recommended_article_heading">
                Recommened Arricle
              </div>
              <div>
                <a className="recommended_article_link" href="#">
                  See All
                </a>
              </div>
            </div>
            <div className="recommended_article_body">
              <div className="recommended_body_para">
                <p className="recommended_body_para_heading">Recommened Arricle</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                 
                </p>
                <a href="#">Read More</a>
              </div>
              <div className="recommended_body_para">
                <p className="recommended_body_para_heading">Recommened Article</p>
                <p>
                  Lorem Ipsum is simply dummy text of the ing 
                </p>
                <a href="#">Read More</a>
              </div>
              <div className="recommended_body_para">
                <p className="recommended_body_para_heading">Recommened Article</p>
                <p>
                  Lorem Ipsum is simply dummy text of the prinm 
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="lastest_proposal">
            <div className="recommended_article_header">
              <div className="recommended_article_heading">
                Lastest Proposal
              </div>
              <div>
                <Link className="recommended_article_link" to="/lastestQuotes" onClick={handlelastestQuotes}>
                  See All
                </Link>
              </div>
            </div>
            <div className="lastest_proposal_body">
              <div className="facepimple">
                <h6 className="facepimple_heading">Face Pimple Problem</h6>
                <div className="facepimplebody">
                  <div className="lastest1img">
                  </div>
                  <div className="doctorname_star">
                    <p>Dr.Sanford M</p>
                    <div className="starRating"> 
                    <img  src={starRating} alt="star rating" className="starRating_image" ></img></div>
                  </div>
                  <div className="amount">$434</div>
                </div>
              </div>
              <div className="facepimple">
                <h6 className="facepimple_heading">Stomach Problem</h6>
                <div className="facepimplebody">
                  <div className="lastest1img"></div>
                  <div className="doctorname_star">
                  <p>Dr.Sanford M</p>
                    <div className="starRating"> 
                    <img  src={starRating} alt="star rating" className="starRating_image" ></img></div>
                  </div>
                  <div className="amount">$434</div>
                </div>
              </div>
              <div className="facepimple">
                <h6 className="facepimple_heading">Hypertention</h6>
                <div className="facepimplebody">
                  <div className="lastest1img"></div>
                  <div className="doctorname_star">
                  <p>Dr.Sanford M</p>
                    <div className="starRating"> 
                    <img  src={starRating} alt="star rating" className="starRating_image" ></img></div>
                  </div>
                  <div className="amount">$434</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rate_your_completed_order">
            <div className="recommended_article_header">
              <div className="recommended_article_heading">
                Rate Your Complete orders
              </div>
              <div>
                <a className="recommended_article_link" href="#">
                  See All
                </a>
              </div>
            </div>
            <div className="rate_your_inner_div">
              <div className="rate_your_div1">
                <div className="rate_your_image_div"></div>
                <div className="rate_your_drname_star">
                  <p>Dr. stanford M.</p>
                </div>
              </div>
              <div className="rate_your_div2">
                  
              </div>
              <div className="rate_your_btn_box">
                  <button className="rateyoursubmitbtn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelloEmma;
