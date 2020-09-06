import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const Header = () => {
	return (
		<MDBNav>
			<MDBNavItem>
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
			{/* <MDBNavItem>
		<MDBNavLink to="/login">Login</MDBNavLink>
	</MDBNavItem> */}
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
		</MDBNav>
	);
};

export default Header;
