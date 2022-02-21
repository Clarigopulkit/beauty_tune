import React, { useState } from "react";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";
import "./lastestQuotes.css";
import doctorImg from "../photos/doctorImg.png";
import Rating from "../photos/fourStar.jpg";
import { data } from "./data";
import ReactPaginate from "react-paginate";

const LastestQuotes = () => {
  const [doctorData, setDoctorData] = useState(data.userData);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = doctorData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((details) => {
      const {
        id,
        specificDesignation,
        doctorName,
        Designation,
        price,
        expireInDays,
      } = details;

      return (
        <>
          <div className="middleDiv_Box" key={id}>
            <div className="middleDiv_innerbox">
              <div className="innerbox1">
                <h6>{specificDesignation}</h6>
              </div>
              <div className="innerbox2">
                <div className="innerBoxes1">
                  <div className="doctorImgBox">
                    <img src={doctorImg} className="doctorImg"></img>
                  </div>
                  <div className="doctorDetails">
                    <p className="doctorName">{doctorName}</p>
                    <p className="doctorDesignation">{Designation}</p>
                    <div className="doctorRating">
                      <img className="ratingImg" src={Rating}></img>
                    </div>
                  </div>
                </div>
                <div className="innerBoxes2">
                  <div className="innerboxesbox">
                    <p>{price}</p>
                    <p>Expires in</p>
                    <p>{expireInDays}</p>
                  </div>
                </div>
                <div className="innerBoxes3">
                  <button className="ViewDetails">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });

  const pageCount = Math.ceil(doctorData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="lastestQuotes_body">
        <div className="bodyDiv">
          <div className="topDiv">
            <div className="topDiv_leftBox">
              <div className="dashboardNameBox">
                <div className="dashboardname">
                  <p>Dashboard | View All Quotes</p>
                </div>
              </div>
              <div className="lastestQuotes">
                <h3>Lastest Quotes</h3>
              </div>
            </div>
          </div>
          <div className="middleDiv">{displayUsers}</div>
          <div className="bottomDiv">
            <div className="bottonDivBox">
              <div className="bottomInnerDiv1">
                <div className="pagination">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                  />
                </div>
              </div>
              <div className="bottomInnerDiv2">
                <button className="paginationNextBtn" >Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LastestQuotes;
