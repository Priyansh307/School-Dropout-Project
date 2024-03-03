import React from "react";
import "./CSS/Home_pages.css";
import school_img from "../Components/Assets/school_image.jpeg";
import gov_img from "../Components/Assets/govtg1.png";
import { Link } from "react-router-dom";

const Home_pages = () => {
  return (
    <>
      <div className="Dashboard_page">
        <Link to="/loginschhome">
          <div className="School_img">
            <img src={school_img} alt="" />
            School
          </div>
        </Link>
        <Link to="/logindislogin">
          <div className="School_img">
            <img src={school_img} alt="" />
            District
          </div>
        </Link>
        <Link to="/logingovlogin">
          <div className="Government_img">
            <img src={gov_img} alt="" />
            Government
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home_pages;
