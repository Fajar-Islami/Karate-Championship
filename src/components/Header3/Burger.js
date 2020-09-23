import React, { useState } from "react";
import RightNav from "./RightNav";

const Burger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="StyledBurger" onClick={() => setOpen(!open)}>
				<div className={open ? "active-Burger" : ""} />
				<div className={open ? "active-Burger" : ""} />
				<div className={open ? "active-Burger" : ""} />
			</div>
			<RightNav open={open} />
		</>
	);
};

export default Burger;
