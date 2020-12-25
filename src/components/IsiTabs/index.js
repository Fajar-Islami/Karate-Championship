import React, { Fragment } from "react";
import { MDBBox } from "mdbreact";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css';

const IsiTabs = ({ label, tableType }) => {
	// console.log(tabel);
	return (
		<Fragment>
			<div className="block-example border  border-warning py-3">
				{/* <MDBBox bgColor="warning" color="indigo">
					<h4 className="ml-3 py-1 font-weight-normal"> {label} </h4>
				</MDBBox>
				
				<div className="px-3">{tableType}</div> */}

				<Accordion allowMultipleExpanded='true' allowZeroExpanded='true' >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {label}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="px-3">{tableType}</div>
                </AccordionItemPanel>
            </AccordionItem>
            {/* <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem> */}
        </Accordion>
			</div>
			<br />
		</Fragment>
	);
};

export default IsiTabs;
