import React from "react";
import "./CSS/Navbargov.css";
import govth1 from "../Assets/govtg1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbargov = ({ showContent }) => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/logingovlogin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <header></header>
      <nav className="nav_gov">
        <div className="logo_gov">
          <img className="govtg_gov_nav" src={govth1} alt="" />
          <h1 className="nav_h1">Government Of India</h1>
        </div>
        <ul className="ul_gov_nav">
          <li>
            <a
              href="#"
              className="a_gov_page_nav"
              onClick={() => showContent("info")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="a_gov_page_nav"
              onClick={() => showContent("dropout-rate")}
            >
              Drop Rate
            </a>
          </li>
          <li>
            <a href="#" className="a_gov_page_nav">
              Dropout Analysis
            </a>
            <ul className="sub-nav_gov">
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_Age_Wise")}
                >
                  Age Wise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_Gender_Wise")}
                >
                  Gender Wise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_Cast_Wise")}
                >
                  Cast Wise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_Income_Wise")}
                >
                  Income Wise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_Category_Wise")}
                >
                  Category Wise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_School_Wise")}
                >
                  School Wise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_Area_Wise")}
                >
                  Area Wise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("dropout_analysis_Reason_Wise")}
                >
                  Reason Wise
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="a_gov_page_nav"
              onClick={() => showContent("Report_state")}
            >
              Report
            </a>
          </li>
          <li>
            <a href="#" className="a_gov_page_nav">
              Suggestion
            </a>
            <ul className="sub-nav_gov">
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("instructions_to_distict")}
                >
                  Instructions To District
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("instructions_to_school")}
                >
                  Instructions To School
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="a_gov_page_nav"
                  onClick={() => showContent("suggestion")}
                >
                  District Details
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="a_gov_page_nav"
              onClick={() => showContent("aproved")}
            >
              Approved
            </a>
          </li>

          <li>
            <Link className="a_school_page_nav" onClick={handleLogout}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbargov;
