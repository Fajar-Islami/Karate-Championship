import React, { useContext } from "react";
import { MDBTypography, MDBBox } from "mdbreact";
import { DummyContext } from "../../context/dummyContext";

const DetailNews = () => {
  const { datas } = useContext(DummyContext);

  // console.log(datas);
  return datas.map((data) => {
    return (
      <MDBTypography blockquote bqColor="success">
        <MDBBox tag="p" mb={0} className="bq-title">
          {data.judul}
        </MDBBox>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque! Sit, rem, in?</p>
      </MDBTypography>
    );
  });
};

export default DetailNews;
