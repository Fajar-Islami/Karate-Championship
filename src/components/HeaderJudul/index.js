import React from "react";
import "./style.scss";

const HeaderJudul = ({ judul }) => {
  return (
    <div className="header-kotak">
      <span> {judul} </span>
    </div>
  );
};

export default HeaderJudul;
