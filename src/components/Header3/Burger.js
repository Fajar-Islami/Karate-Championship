import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <div className="StyledBurger" onClick={() => setOpen(!open)}>
        <div className={open ? "active-Burger" : ""} />
        <div className={open ? "active-Burger" : ""} />
        <div className={open ? "active-Burger" : ""} />
      </div>
      {/* <RightNav open={open} /> */}
      <ul className={open ? "active-side" : ""}>
        <li>
          <Link
            to="/"
            onClick={() => {
              setOpen(!open);
              setOpenSide(false);
            }}>
            Home
          </Link>
        </li>
        <li className="hiddenn">
          <Link to="/bracket" onClick={() => setOpen(!open)}>
            Bracket
          </Link>
        </li>
        <li className="hiddenn">
          <Link to="/categories" onClick={() => setOpen(!open)}>
            Categories
          </Link>
        </li>

        <li className="hiddenn">
          <Link to="/medals" onClick={() => setOpen(!open)}>
            Medals
          </Link>
        </li>
        <li className="hiddenn">
          <Link to="/schedulesResult" onClick={() => setOpen(!open)}>
            Schedules & Result
          </Link>
        </li>
        <li className="hiddenn">
          <Link to="/statistic" onClick={() => setOpen(!open)}>
            Statistic
          </Link>
        </li>
        <li className="hiddenn">
          <Link to="/teams" onClick={() => setOpen(!open)}>
            Teams
          </Link>
        </li>
        <li className="hiddenn">
          <Link to="/photos" onClick={() => setOpen(!open)}>
            Photos
          </Link>
        </li>
        <li className="hiddenn">
          <Link to="/videos" onClick={() => setOpen(!open)}>
            Videos
          </Link>
        </li>
        <li>
          <Link
            to="/guidance"
            onClick={() => {
              setOpen(!open);
              setOpenSide(false);
            }}>
            Guidance
          </Link>
        </li>
        <li>
          <Link
            to="/registration"
            onClick={() => {
              setOpen(!open);
              setOpenSide(false);
            }}>
            Registration
          </Link>
        </li>
        {/* <li>
          <MDBDropdown>
            <MDBDropdownToggle color="info-color" nav caret>
              Gallery
            </MDBDropdownToggle>
            <MDBDropdownMenu
              basic
              onClick={() => {
                setOpen(!open);
                setOpenSide(false);
              }}>
              <MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable " fixed="true">
                <Link to="/photos">
                  <MDBIcon icon="camera" className="mr-2" />
                  Photos
                </Link>
              </MDBDropdownItem>
              <MDBDropdownItem className="pl-0 pt-3 pb-3 hoverable" fixed="true">
                <Link to="/videos">
                  <MDBIcon icon="play" className="mr-2" />
                  Videos
                </Link>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </li> */}
        <li>
          <a
            href="/signin"
            onClick={() => {
              setOpen(!open);
              setOpenSide(false);
            }}>
            Sign In
          </a>
        </li>
        <li>
          <div style={{ cursor: "pointer" }} className="StyledBurgerFull ml-2" onClick={() => setOpenSide(!openSide)}>
            <div className={openSide ? "active-Burger" : ""} />
            <div className={openSide ? "active-Burger" : ""} />
            <div className={openSide ? "active-Burger" : ""} />
          </div>
          <ul className={openSide ? "active-sidefull" : "sidefull"}>
            <li className="">
              <Link to="/bracket" onClick={() => setOpenSide(!openSide)}>
                Bracket
              </Link>
            </li>
            <li className="">
              <Link to="/categories" onClick={() => setOpenSide(!openSide)}>
                Categories
              </Link>
            </li>

            <li className="">
              <Link to="/medals" onClick={() => setOpenSide(!openSide)}>
                Medals
              </Link>
            </li>
            <li className="">
              <Link to="/schedulesResult" onClick={() => setOpenSide(!openSide)}>
                Schedules & Result
              </Link>
            </li>
            <li className="">
              <Link to="/statistic" onClick={() => setOpenSide(!openSide)}>
                Statistic
              </Link>
            </li>
            <li className="">
              <Link to="/teams" onClick={() => setOpenSide(!openSide)}>
                Teams
              </Link>
            </li>
            <li className="">
              <Link to="/photos" onClick={() => setOpen(!open)}>
                Photos
              </Link>
            </li>
            <li className="">
              <Link to="/videos" onClick={() => setOpen(!open)}>
                Videos
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Burger;
