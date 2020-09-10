import React, { useState, Fragment, useRef } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBContainer, MDBListGroupItem } from "mdbreact";
import { useHistory, Link } from "react-router-dom";
import { Lemkari } from "../../assets";

const Header = () => {
	const history = useHistory();

	const [dropD, setdropD] = useState(false);
	const handleToggle = () => {
		setdropD((dropD) => !dropD);
	};

	// const [collapseID, setCollapse] = useState();
	// const prevCollapseRef = useRef();

	// const handleCollapse = (collapseIDB) => () => {
	// 	// setCollapse((prevCollapse) => ({
	// 	// 	collapseID: prevCollapse.collapseID !== collapseID ? collapseID : "",
	// 	// }));
	// 	setCollapse((collapseID) => (collapseID !== collapseIDB ? collapseIDB : ""));
	// };

	return (
		// <MDBNav>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/">Home</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/bracket">Bracket</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/categories">Categories</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/guidance">Guidance</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/medals">Medals</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/schedulesResult">SchedulesResult</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/statistic">Statistic</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/teams">Teams</MDBNavLink>
		// 	</MDBNavItem>
		// 	<MDBNavItem>
		// 		<MDBNavLink to="/dummy">Dummy</MDBNavLink>
		// 	</MDBNavItem>
		// </MDBNav>
		<Fragment>
			<MDBNavbar color="info-color" dark expand="md" scrolling fixed="top">
				<MDBNavbarBrand>
					<img src={Lemkari} alt="" className="ml-3 rounded-circle hoverable" style={{ height: "65px", cursor: "pointer" }} onClick={() => history.push("/")} />
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={handleToggle} />
				<MDBCollapse id="navbarCollapse3" isOpen={dropD} navbar>
					<MDBNavbarNav left>
						<MDBNavItem active>
							<MDBNavLink to="/">Home</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/bracket">Bracket</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/categories">Categories</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/medals">Medals</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/schedulesResult">SchedulesResult</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/statistic">Statistic</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/teams">Teams</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/dummy">Dummy</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBDropdown>
								<MDBDropdownToggle color="info-color" nav caret>
									{/* <div className="d-none d-md-inline">aaa</div> */}
									AAAA
								</MDBDropdownToggle>
								<MDBDropdownMenu className="dropdown-default pt-0">
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable " active fixed="true">
										<Link to="/">
											<MDBIcon icon="user" className="mr-2" />
											Home
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable" fixed="true">
										<Link to="/bracket">
											<MDBIcon icon="user" className="mr-2" />
											Bracket
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable">
										<Link to="/categories">
											<MDBIcon icon="user" className="mr-2" />
											Categories
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable">
										<Link to="/guidance">
											<MDBIcon icon="user" className="mr-2" /> Guidance
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable">
										<Link to="/medals">
											<MDBIcon icon="user" className="mr-2" /> Medals
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable">
										<Link to="/schedulesResult">
											<MDBIcon icon="user" className="mr-2" />
											schedulesResult
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable">
										<Link to="/statistic">
											<MDBIcon icon="user" className="mr-2" />
											statistic
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable">
										<Link to="/teams">
											<MDBIcon icon="user" className="mr-2" />
											Teams
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable">
										<Link to="/dummy">
											<MDBIcon icon="user" className="mr-2" />
											Dummy
										</Link>
									</MDBDropdownItem>
								</MDBDropdownMenu>
							</MDBDropdown>
						</MDBNavItem>
						<MDBNavItem>
							<MDBDropdown>
								<MDBDropdownToggle color="info-color" nav caret>
									Gallery
								</MDBDropdownToggle>
								<MDBDropdownMenu className="dropdown-default ">
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable " active fixed="true">
										<Link to="/photos">
											<MDBIcon icon="image" className="mr-2" />
											Photos
										</Link>
									</MDBDropdownItem>
									<MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable" fixed="true">
										<Link to="/videos">
											<MDBIcon icon="video" className="mr-2" />
											Videos
										</Link>
									</MDBDropdownItem>
								</MDBDropdownMenu>
							</MDBDropdown>
						</MDBNavItem>
					</MDBNavbarNav>

					<MDBNavbarNav right>
						<div className="pt-2 d-flex">
							<MDBNavItem>
								<MDBNavLink className="waves-effect waves-light" to="/guidance">
									<MDBIcon icon="info-circle" /> Guidance
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink className="waves-effect waves-light " to="/registration">
									<MDBIcon icon="plus-circle" /> Registration
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBDropdown>
									<MDBDropdownToggle nav caret>
										<MDBIcon icon="user" /> User
									</MDBDropdownToggle>
									<MDBDropdownMenu className="dropdown-default">
										<MDBDropdownItem href="#!" className="m-auto hoverable ">
											My Profile
										</MDBDropdownItem>
										<MDBDropdownItem href="#!" className="m-auto hoverable ">
											Setting
										</MDBDropdownItem>
										<MDBDropdownItem href="#!" className="m-auto hoverable ">
											Something else here
										</MDBDropdownItem>
										<MDBDropdownItem href="#!" className="m-auto hoverable ">
											Logout
										</MDBDropdownItem>
									</MDBDropdownMenu>
								</MDBDropdown>
							</MDBNavItem>
						</div>
						<MDBNavItem>
							<MDBBtn outline color="white" href="/login" className="rounded mb-0">
								Sign In
							</MDBBtn>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
			{/* <MDBNavbar color="light-blue lighten-4" light>
				<MDBContainer>
					<MDBNavbarToggler onClick={handleCollapse("navbarCollapse1")} />
					<MDBCollapse id="navbarCollapse1" isOpen={collapseID} navbar>
						<MDBNavbarNav right>
							<MDBNavItem active>
								<MDBNavLink to="#!">Home</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="#!">Link</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="#!">Profile</MDBNavLink>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
					<MDBNavbarBrand>Navbar</MDBNavbarBrand>
				</MDBContainer>
			</MDBNavbar> */}
		</Fragment>
	);
};

export default Header;
