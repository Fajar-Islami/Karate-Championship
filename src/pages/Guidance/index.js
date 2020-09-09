import React, { useEffect, Fragment, useState } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const Guidance = () => {
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
		document.title = `Guidance`;
	});

	return (
		<Fragment>
			<h3 className="pt-3">Halaman Guidance</h3>
			<hr />

			<MDBNav className="nav-tabs pt-3 px-3">
				<MDBNavItem>
					<MDBNavLink link to="#" active={activeItem === "1"} onClick={handleToggle("1")} role="tab">
						Indonesia
					</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink link to="#" active={activeItem === "2"} onClick={handleToggle("2")} role="tab">
						English
					</MDBNavLink>
				</MDBNavItem>
			</MDBNav>

			<div className="block-example border border-dark p-3">
				<MDBTabContent activeItem={activeItem}>
					<MDBTabPane tabId="1" role="tabpanel">
						Preview PDF
					</MDBTabPane>

					<MDBTabPane tabId="2" role="tabpanel">
						Preview PDF
					</MDBTabPane>
				</MDBTabContent>
			</div>
		</Fragment>
	);
};

export default Guidance;
