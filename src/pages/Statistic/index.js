import React, { useState, useEffect, Fragment } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { IsiTabs, TabelStatistics } from "../../components";
const Statistic = () => {
	const [activeItem, setActiveItem] = useState("1");

	const handleToggle = (tab) => (e) => {
		console.log(tab);
		if (activeItem !== tab) {
			console.log("beda");
			setActiveItem((activeItem) => tab);
		}
	};

	// Lifecycle React Hooks
	useEffect(() => {
		document.title = `Statistic`;
		// console.log(activeItem);
	});

	return (
		<Fragment>
			<h3 className="pt-3">Halaman Statistic</h3>
			<hr />
			<MDBNav className="nav-tabs  px-3" header>
				<MDBNavItem>
					<MDBNavLink link to="#" active={activeItem === "1"} onClick={handleToggle("1")} role="tab">
						Rangking
					</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink link to="#" active={activeItem === "2"} onClick={handleToggle("2")} role="tab">
						Summary
					</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink link to="#" active={activeItem === "3"} onClick={handleToggle("3")} role="tab">
						By Point
					</MDBNavLink>
				</MDBNavItem>
			</MDBNav>

			<div className="block-example border  border-warning py-3">
				{/* <div className="block-example border border-dark"> */}
				{/* Content */}
				<MDBTabContent activeItem={activeItem}>
					<MDBTabPane tabId="1" role="tabpanel">
						<IsiTabs judul="Male Usia Dini" tabel={[<TabelStatistics tes="abbbbb" />, <TabelStatistics tes="2" />]} />
						<IsiTabs tabel={<TabelStatistics />} />
						{/* <IsiTabs />
						<IsiTabs />
						<IsiTabs /> */}
					</MDBTabPane>

					<MDBTabPane tabId="2" role="tabpanel">
						{/* <IsiTabs />
						<IsiTabs />
						<IsiTabs />
						<IsiTabs /> */}
					</MDBTabPane>

					<MDBTabPane tabId="3" role="tabpanel">
						{/* <IsiTabs />
						<IsiTabs />
						<IsiTabs />
						<IsiTabs /> */}
					</MDBTabPane>
				</MDBTabContent>
				{/* </div> */}
			</div>
		</Fragment>
	);
};

export default Statistic;
