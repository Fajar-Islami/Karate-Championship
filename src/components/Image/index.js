import React from "react";

const Image = ({ image, width = "", height = "", cursor = "", objectFit = "", ...rest }) => {
  return <img src={image} alt="" style={{ width: width, height: height, cursor: cursor, objectFit: objectFit }} {...rest} />;
};

export default Image;
