import React from "react";

const Image = ({ image, width = "", height = "", cursor = "", ...rest }) => {
	return <img src={image} alt="" style={{ width: width, height: height, cursor: cursor }} {...rest} />;
};

export default Image;
