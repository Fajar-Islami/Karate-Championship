import React, { useEffect } from "react";
import { TabelCategories } from "../../components";
import { usiadini, prapemula, cadet, pemula, junior, senior, under21, veteran } from "./data";
import "../../components/TabelCategories/style.scss";
import { MDBContainer, MDBAnimation } from "mdbreact";

const Categories = () => {
  // console.log(usiadini);
  // console.log(usiadini.columns);

  // const kolom = usiadini.columns;
  // const baris = usiadini.rows;
  // const kolom2 = data.columns;
  // const baris2 = data.rows;

  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Categories`;
  }, []);

  return (
    <MDBContainer fluid>
      <MDBAnimation reveal type="fadeInUp">
        <hr className="my-4" />
      </MDBAnimation>
      <MDBAnimation reveal type="fadeInUp">
        <h4>Usia Dini</h4>
        <TabelCategories small data={usiadini} alignText={["center", "left", "center", "center"]} />
        {/* <TabelCategories striped bordered small data={usiadini} /> */}
        <br />
        <h4>Pra Pemula</h4>
        <TabelCategories bordered small data={prapemula} alignText={["center", "left", "center", "center"]} />

        <br />
        <h4>Pemula</h4>
        <TabelCategories bordered small data={cadet} alignText={["center", "left", "center", "center"]} />

        <br />
        <h4>Cadet</h4>
        <TabelCategories bordered small data={pemula} alignText={["center", "left", "center", "center"]} />

        <br />
        <h4>Junior</h4>
        <TabelCategories bordered small data={junior} alignText={["center", "left", "center", "center"]} />

        <br />
        <h4>Senior</h4>
        <TabelCategories bordered small data={senior} alignText={["center", "left", "center", "center"]} />
        <br />
        <h4>Under 21</h4>
        <TabelCategories bordered small data={under21} alignText={["center", "left", "center", "center"]} />
        <br />
        <h4>Veteran</h4>
        <TabelCategories bordered small data={veteran} alignText={["center", "left", "center", "center"]} />
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Categories;
