import React from "react";
import "./style.scss";

const RightNav = ({ open }) => {
	return (
		<ul className={open ? "active-side" : ""}>
			<li>
				<a href=""> Home </a>
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
