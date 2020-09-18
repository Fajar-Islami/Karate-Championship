import React, { useEffect, Fragment, useState } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Worker } from "@phuocng/react-pdf-viewer";
import Viewer from "@phuocng/react-pdf-viewer";
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
						<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
							<Viewer fileUrl="https://arxiv.org/pdf/quant-ph/0410100.pdf " />
						</Worker>
					</MDBTabPane>

					<MDBTabPane tabId="2" role="tabpanel">
						<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
							<Viewer fileUrl="https://arxiv.org/pdf/quant-ph/0410100.pdf " />
						</Worker>
					</MDBTabPane>
				</MDBTabContent>
			</div>
		</Fragment>
	);
};

export default Guidance;
