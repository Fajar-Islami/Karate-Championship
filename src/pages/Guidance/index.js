import React, { useEffect, Fragment, useState } from "react";
import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBBtn,
} from "mdbreact";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "./Profil Perusahaan.pdf";

const Guidance = (props) => {
  const [activeItem, setActiveItem] = useState("1");

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [dropdown, setdropdown] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    for (var index = 1; index <= numPages; index++) {
      let total = index;
      setdropdown((dropdown) => [...dropdown, total]);
    }
  }

  const handleToggle = (tab) => (e) => {
    console.log(tab);
    if (activeItem !== tab) {
      // console.log("beda");
      setActiveItem((activeItem) => tab);
    }
  };
  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Guidance`;
  }, []);

  return (
    <Fragment>
      <MDBContainer fluid>
        <hr className='my-4' />

        <MDBNav className='nav-tabs pt-3 px-3'>
          <MDBNavItem>
            <MDBNavLink
              link
              to='#'
              active={activeItem === "1"}
              onClick={handleToggle("1")}
              role='tab'
            >
              Indonesia
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to='#'
              active={activeItem === "2"}
              onClick={handleToggle("2")}
              role='tab'
            >
              English
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>

        <div className='block-example border border-dark p-3'>
          <MDBTabContent activeItem={activeItem}>
            <MDBTabPane tabId='1' role='tabpanel'>
              <Document
                className='d-flex align-items-center justify-content-center'
                file={pdf}
                loading={
                  <>
                    <div className='spinner-grow text-primary' role='status'></div>
                    <div>Sedang memuat...</div>
                  </>
                }
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <div className='d-flex flex-column align-items-center'>
                  <div className='d-flex align-items-center w-100 justify-content-around'>
                    <span className='d-flex'>
                      <MDBBtn
                        color='primary'
                        size='sm'
                        style={{ padding: "revert" }}
                        onClick={() => setPageNumber(pageNumber - 1)}
                      >
                        <span style={{ fontSize: "24px" }}>&laquo;</span>
                      </MDBBtn>
                      <p style={{ marginTop: "revert" }}>
                        Halaman {pageNumber} dari {numPages}
                      </p>
                      <MDBBtn
                        color='primary'
                        size='sm'
                        style={{ padding: "revert" }}
                        onClick={() => setPageNumber(pageNumber + 1)}
                      >
                        <span style={{ fontSize: "24px" }}>&raquo;</span>
                      </MDBBtn>
                    </span>
                    <span className='d-flex'>
                      Pergi ke halaman: &nbsp;
                      <select className=' browser-default' id='halaman-pdf'>
                        {dropdown.map((item, i) => {
                          return (
                            <option value={item} key={i} onClick={() => setPageNumber(item)}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </span>
                  </div>
                  <Page pageNumber={pageNumber} />
                  <a className='btn-primary btn Ripple-parent' href={pdf} download={true}>
                    Unduh PDF
                  </a>
                </div>
              </Document>
            </MDBTabPane>

            <MDBTabPane tabId='2' role='tabpanel'>
              <Document
                className='d-flex align-items-center justify-content-center'
                file={pdf}
                loading={
                  <>
                    <div className='spinner-grow text-primary' role='status'></div>
                    <div>Sedang memuat...</div>
                  </>
                }
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <div className='d-flex flex-column align-items-center'>
                  <div className='d-flex align-items-center w-100 justify-content-around'>
                    <span className='d-flex'>
                      <MDBBtn
                        color='primary'
                        size='sm'
                        style={{ padding: "revert" }}
                        onClick={() => setPageNumber(pageNumber - 1)}
                      >
                        <span style={{ fontSize: "24px" }}>&laquo;</span>
                      </MDBBtn>
                      <p style={{ marginTop: "revert" }}>
                        Page {pageNumber} of {numPages}
                      </p>
                      <MDBBtn
                        color='primary'
                        size='sm'
                        style={{ padding: "revert" }}
                        onClick={() => setPageNumber(pageNumber + 1)}
                      >
                        <span style={{ fontSize: "24px" }}>&raquo;</span>
                      </MDBBtn>
                    </span>
                    <span className='d-flex'>
                      Go to page: &nbsp;
                      <select className=' browser-default' id='halaman-pdf'>
                        {dropdown.map((item, i) => {
                          return (
                            <option value={item} key={i} onClick={() => setPageNumber(item)}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </span>
                  </div>
                  <Page pageNumber={pageNumber} />
                  <a className='btn-primary btn Ripple-parent' href={pdf} download={true}>
                    Download PDF
                  </a>
                </div>
              </Document>
            </MDBTabPane>
          </MDBTabContent>
        </div>
      </MDBContainer>
    </Fragment>
  );
};

export default Guidance;
