import React, { useEffect, Fragment } from "react";
import { TabelCategories } from "../../components";
import { usiadini, prapemula, cadet, pemula, junior, senior, under21, veteran } from "./data";
import "../../components/TabelCategories/style.scss";

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
    <Fragment>
      <h3 className="pt-3">Categories</h3>
      <hr />
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

      {/* <hr /> */}
      {/* <Tabel3 data={usiadini} /> */}
      {/* <MDBDataTable striped bordered small data={usiadini} order={["no", "asc"]} />; */}
      {/* <MDBDataTable striped bordered small data={usiadini} />; */}
      {/* <MDBDataTable striped bordered small data={data} />; */}
    </Fragment>
  );
};

export default Categories;
