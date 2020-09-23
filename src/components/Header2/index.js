import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Lemkari } from "../../assets";
import { Image } from "..";
import { MDBIcon } from "mdbreact";

import { SidebarData } from "../Sidebar2";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

const Header2 = () => {
	const history = useHistory();

	// const [click, setClick] = useState(false);
	// const [button, setButton] = useState(true);
	const [navbar, setNavbar] = useState(false);

	// const handleClick = () => setClick(!click);
	// const closeMobileMenu = () => setClick(false);

	// const showButton = () => {};

	const changeBackground = () => {
		console.log(window.scrollY);
		if (window.scrollY >= 600) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	const [sideBar, setSideBar] = useState(false);

	const showSideBar = () => setSideBar(!sideBar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				{/* <div className={navbar ? "navbar active" : "navbar"}> */}
				<div className="navbar-F">
					<div className="navbar-container-F">
						<Link to="#" className="menu-bars-F">
							<FaIcons.FaBars onClick={showSideBar} />
						</Link>

						{/* <Image image={Lemkari} alt="" className="ml-4 rounded-circle hoverable" height="65px" cursor="pointer" onClick={() => history.push("/")} title="Lemakri" />

					<Link to="/">Home</Link>
					<Link to="/bracket">Bracket</Link>
					<Link to="/categories">Categories</Link>
					<Link to="/medals">Medals</Link>
					<Link to="/schedulesResult">SchedulesResult</Link>
					<Link to="/statistic">Statistic</Link>
					<Link to="/teams">Teams</Link> */}
					</div>
				</div>
				<nav className={sideBar ? "nav-menu-F active-F" : "nav-menu-F"} onClick={showSideBar}>
					<ul className="nav-menu-items-F">
						<li className="navbar-toggle-F">
							<Link to="#" className="menu-bars-F">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, i) => {
							return (
								<li key={i} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
};

export default Header2;
