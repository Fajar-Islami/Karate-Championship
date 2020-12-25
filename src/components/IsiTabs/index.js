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
  import './style.scss'

const IsiTabs = ({ label, tableType }) => {
	// console.log(tabel);
	return (
		<Fragment>
			<div className="block-example border  border-warning py-3">

				<Accordion allowMultipleExpanded='true' allowZeroExpanded='true'  >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton >
                        {label}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="px-1">{tableType}</div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
			</div>
			<br />
		</Fragment>
	);
};

export default IsiTabs;
