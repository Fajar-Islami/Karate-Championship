import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const RightNav = ({ open }) => {
  let status = open;
  console.log(status);

  const [openR, setopenR] = useState(status);
  useEffect(() => {
    setopenR(false);
  }, []);
  console.log(openR);
  return (
    <ul className={open ? "active-side" : ""}>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <a href=""> Guidance </a>
      </li>
      <li>
        <a href=""> Registration </a>
      </li>
      <li>
        <a href=""> Sign In </a>
      </li>
    </ul>
  );
};

export default RightNav;
