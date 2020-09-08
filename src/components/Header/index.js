import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";
import { Lemkari } from "../../assets";

const Header = () => {
	const history = useHistory();

	const [dropD, setdropD] = useState(false);

	const handleToggle = () => {
		setdropD((dropD) => !dropD);
	};

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
		<MDBNavbar color="info-color" dark expand="md" scrolling fixed="top" className="">
			{/* <Fragment> */}
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
						<MDBNavLink to="/guidance">Guidance</MDBNavLink>
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
							<MDBDropdownToggle nav caret>
								<div className="d-none d-md-inline">Dropdown</div>
							</MDBDropdownToggle>
							<MDBDropdownMenu className="dropdown-default">
								<MDBDropdownItem href="#!">Action</MDBDropdownItem>
								<MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
								<MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
								<MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
							</MDBDropdownMenu>
						</MDBDropdown>
					</MDBNavItem>
				</MDBNavbarNav>
				<MDBNavbarNav right>
					<MDBNavItem>
						<MDBBtn outline color="white" href="/login" className="rounded mb-0">
							Sign In
						</MDBBtn>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBCollapse>
			{/* </Fragment> */}
		</MDBNavbar>
	);
};

export default Header;
