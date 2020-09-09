import React, { useState, useEffect, Fragment } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBtnGroup, MDBBtn, MDBBadge, MDBTable, MDBCardBody, MDBTableBody } from "mdbreact";
import { IsiTabs } from "../../components";

const Medals = () => {
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
		document.title = `Medal`;
	});

	return (
		<Fragment>
			<h3 className="pt-3">Halaman Medals</h3>
			<hr />
			{/* <MDBNav className="nav-tabs pb-3 px-3"> */}
			<MDBBtnGroup className=" mb-3" alt="150x75">
				<MDBBtn link to="#" active={activeItem === "1"} onClick={handleToggle("1")}>
					Kontingen
				</MDBBtn>
				<MDBBtn link to="#" active={activeItem === "2"} onClick={handleToggle("2")}>
					Perguruan
				</MDBBtn>
				<MDBBtn link to="#" active={activeItem === "3"} onClick={handleToggle("3")}>
					Pengprov
				</MDBBtn>
				<MDBBtn link to="#" active={activeItem === "4"} onClick={handleToggle("4")}>
					Peraih Medali
				</MDBBtn>
				<MDBBtn link to="#" active={activeItem === "5"} onClick={handleToggle("5")}>
					Medals History
				</MDBBtn>
			</MDBBtnGroup>
			{/* </MDBNav> */}

			<div className="block-example border border-dark p-3">
				{/* <div className="block-example border border-dark"> */}
				{/* Content */}
				<MDBTabContent activeItem={activeItem}>
					<MDBTabPane tabId="1" role="tabpanel">
						<MDBTable borderless>
							<MDBTableBody>
								<tr>
									<th className="col-2">Age Categories</th>
									<th className="col-1">:</th>
									<th className="col-9 pt-2">
										<select className=" browser-default custom-select">
											<option>Choose your option</option>
											<option value="1">Option 1</option>
											<option value="2">Option 2</option>
											<option value="3">Option 3</option>
										</select>
									</th>
								</tr>
								<tr>
									<th className="col-2">Day</th>
									<th className="col-1">:</th>
									<th className="col-9 pt-2">
										<MDBBadge pill color="dark" className="my-2 py-2">
											Overall
										</MDBBadge>
									</th>
								</tr>
							</MDBTableBody>
						</MDBTable>
						<IsiTabs />
					</MDBTabPane>

					<MDBTabPane tabId="2" role="tabpanel">
						<IsiTabs />
					</MDBTabPane>

					<MDBTabPane tabId="3" role="tabpanel">
						<IsiTabs />
					</MDBTabPane>

					<MDBTabPane tabId="4" role="tabpanel">
						<IsiTabs />
					</MDBTabPane>

					<MDBTabPane tabId="5" role="tabpanel">
						<IsiTabs />
					</MDBTabPane>
				</MDBTabContent>
				{/* </div> */}
			</div>
		</Fragment>
	);
};

export default Medals;
