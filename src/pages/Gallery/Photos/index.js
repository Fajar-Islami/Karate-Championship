import React, { useState, useEffect, Fragment } from "react";
import { MDBRow, MDBCol, MDBView, MDBTypography, MDBBox, MDBMask, MDBAnimation, MDBContainer } from "mdbreact";
import "../Photos/style.scss";
import { getPhoto } from "../../../config/";

const Photos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = `Photos`;
    const fetchedData = async () => {
      setData(await getPhoto());
    };
    fetchedData();
  }, []);

  console.log(data);
  return (
    <MDBContainer fluid>
      <MDBAnimation reveal type="fadeInUp">
        <hr className="my-4" />
      </MDBAnimation>
      <MDBAnimation reveal type="fadeInUp">
        <div className="d-flex flex-wrap justify-content-start ">
          {/* <MDBRow> */}
          {data.map((datas, i) => {
            return (
              // <MDBCol lg="3" key={i} className="mb-3">
              <div key={i} className="mb-3 ml-3 mr-1 ">
                <MDBView hover zoom>
                  <img src={datas.Poster} alt="" style={{ width: "300px", height: "400px", objectFit: "contain" }} className="img-fluid flex-center" />
                  <MDBMask className="flex-center">
                    <p className="white-text">Zoom effect</p>
                  </MDBMask>
                </MDBView>
                <MDBBox tag="footer" mb={3} className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </MDBBox>
              </div>
              // {/* </MDBCol> */}
            );
          })}
          {/* </MDBRow> */}
        </div>
        <br />
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Photos;
