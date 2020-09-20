import React from "react";
import "./style.scss";
import { ICCalendar, ICTeam, ICCategory, ICStatistic, ICMedal, ICBracket } from "../../assets";
import { useHistory } from "react-router-dom";

const SideNavigation = () => {
	const history = useHistory();

	return (
		<div className="sidebar-fixed position-fixed ">
			{/* <a href="#!" className="logo-wrapper waves-effect">
				<img alt="MDB React Logo" className="img-fluid" src={logo} />
				LINK
			</a> */}
			{/* <MDBListGroup className="list-group-flush">
					<NavLink exact={true} to="/" activeClassName="activeClass">
						<MDBListGroupItem>
							<MDBIcon icon="chart-pie" className="mr-3" />
							Dashboard
						</MDBListGroupItem>
					</NavLink>
					<NavLink to="/profile" activeClassName="activeClass">
						<MDBListGroupItem>
							<MDBIcon icon="user" className="mr-3" />
							Profile
						</MDBListGroupItem>
					</NavLink>
					<NavLink to="/tables" activeClassName="activeClass">
						<MDBListGroupItem>
							<MDBIcon icon="table" className="mr-3" />
							Tables
						</MDBListGroupItem>
					</NavLink>
					<NavLink to="/maps" activeClassName="activeClass">
						<MDBListGroupItem>
							<MDBIcon icon="map" className="mr-3" />
							Maps
						</MDBListGroupItem>
					</NavLink>
					<NavLink to="/404" activeClassName="activeClass">
						<MDBListGroupItem>
							<MDBIcon icon="exclamation" className="mr-3" />
							404
						</MDBListGroupItem>
					</NavLink>
				</MDBListGroup> */}
			<div className="kotak " style={{ height: "100px" }} onClick={() => history.push("/schedulesResult")}>
				<div className="isi">
					<img src={ICCalendar} alt="" />
					<p>Schedule & Result</p>
				</div>
			</div>
			<div className="kotak " onClick={() => history.push("/teams")}>
				<div className="isi">
					<img src={ICTeam} alt="" />
					Teams
				</div>
			</div>
			<div className="kotak " onClick={() => history.push("/categories")}>
				<div className="isi">
					<img src={ICCategory} alt="" />
					Categories
				</div>
			</div>
			<div className="kotak " onClick={() => history.push("/statistic")}>
				<div className="isi">
					<img src={ICStatistic} alt="" />
					Statistics
				</div>
			</div>
			<div className="kotak " onClick={() => history.push("/medals")}>
				<div className="isi">
					<img src={ICMedal} alt="" />
					Medals
				</div>
			</div>
			<div className="kotak " onClick={() => history.push("/bracket")}>
				<div className="isi">
					<img src={ICBracket} alt="" />
					Bracket
				</div>
			</div>
		</div>
	);
};

export default SideNavigation;
