import React, { useState, useEffect, Fragment } from "react";
import { MDBBadge, MDBTable, MDBTableBody } from "mdbreact";
import { Dropdown, TabelMedals } from "../../components";
import { medalsFull } from "./data";

const Medals = () => {
  const [activeItem, setActiveItem] = useState("1");
  const [activeBadge, setActiveBadge] = useState("Overall");

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
  }, []);

  return (
    <Fragment>
      <h3 className='pt-3'>Halaman Medals</h3>
      <hr />
      {/* <MDBNav className="nav-tabs pb-3 px-3"> */}
      {/* <MDBBtnGroup className=' mb-3' alt='150x75'>
        <MDBBtn
          link
          to='#'
          active={activeItem === '1'}
          onClick={handleToggle('1')}>
          Kontingen
        </MDBBtn>
        <MDBBtn
          link
          to='#'
          active={activeItem === '2'}
          onClick={handleToggle('2')}>
          Perguruan
        </MDBBtn>
        <MDBBtn
          link
          to='#'
          active={activeItem === '3'}
          onClick={handleToggle('3')}>
          Pengprov
        </MDBBtn>
        <MDBBtn
          link
          to='#'
          active={activeItem === '4'}
          onClick={handleToggle('4')}>
          Peraih Medali
        </MDBBtn>
        <MDBBtn
          link
          to='#'
          active={activeItem === '5'}
          onClick={handleToggle('5')}>
          Medals History
        </MDBBtn>
      </MDBBtnGroup> */}
      {/* </MDBNav> */}

      <div className='block-example border border-dark p-3'>
        {/* <div className="block-example border border-dark"> */}
        {/* Content */}
        {/* <MDBTabContent activeItem={activeItem}> */}
        {/* <MDBTabPane tabId='1' role='tabpanel'> */}
        <MDBTable borderless>
          <MDBTableBody>
            <Dropdown
              label='Age Categories'
              selected='--ALL--'
              option={[
                "Usia Dini",
                "Pra Pemula",
                "Pemula",
                "Cadet",
                "Junior",
                "Senior",
                "Under 21",
                "Veteran",
              ]}
            />
            <tr>
              <th className='font-weight-normal'>Day</th>
              <th className='font-weight-bold'>:</th>
              <th className='pt-2'>
                <MDBBadge
                  pill
                  color={activeBadge === "1" ? "default" : "dark"}
                  onClick={() => setActiveBadge("1")}
                  className='my-2 py-2 mr-3 '
                  style={{ cursor: "pointer" }}
                >
                  Day 1
                </MDBBadge>
                <MDBBadge
                  pill
                  color={activeBadge === "2" ? "default" : "dark"}
                  onClick={() => setActiveBadge("2")}
                  className='my-2 py-2 mr-3'
                  style={{ cursor: "pointer" }}
                >
                  Day 2
                </MDBBadge>
                <MDBBadge
                  pill
                  color={activeBadge === "3" ? "default" : "dark"}
                  onClick={() => setActiveBadge("3")}
                  className='my-2 py-2 mr-3'
                  style={{ cursor: "pointer" }}
                >
                  Day 3
                </MDBBadge>
                <MDBBadge
                  pill
                  color={activeBadge === "Overall" ? "default" : "dark"}
                  onClick={() => setActiveBadge("Overall")}
                  className='my-2 py-2 mr-3'
                  style={{ cursor: "pointer" }}
                >
                  Overall
                </MDBBadge>
              </th>
            </tr>
          </MDBTableBody>
        </MDBTable>
        <TabelMedals data={medalsFull} />

        {/* </MDBTabPane>*/}

        {/* <MDBTabPane tabId='2' role='tabpanel'>
            <IsiTabs />
          </MDBTabPane>

          <MDBTabPane tabId='3' role='tabpanel'>
            <IsiTabs />
          </MDBTabPane>

          <MDBTabPane tabId='4' role='tabpanel'>
            <IsiTabs />
          </MDBTabPane>

          <MDBTabPane tabId='5' role='tabpanel'>
            <IsiTabs />
          </MDBTabPane> */}
        {/* </MDBTabContent> */}
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default Medals;
