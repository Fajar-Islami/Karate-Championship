import React, { useState } from "react";
import "./style.scss";
import Burger from "./Burger";
import { Lemkari } from "../../assets";
import { useHistory } from "react-router-dom";

const Header3 = () => {
  const history = useHistory();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className={navbar ? "nav-f sticky" : "nav-f"}>
        <div className="kiri" style={{ cursor: "pointer" }} onClick={() => history.push("/")} title="Lemakri">
          <img src={Lemkari} alt="Lemkari" />
          <span> Lemkari Kerjunas 2019</span>
        </div>
        <Burger />
      </div>
    </>
  );
};

export default Header3;
