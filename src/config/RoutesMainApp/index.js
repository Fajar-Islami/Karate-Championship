import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Bracket, Categories, Guidance, Medals, SchedulesResult, Statistic, Teams, Home, DetailDummy, Dummy, Registration, Tes, Home2 } from "../../pages";
import { Photos, Video } from "../../pages/Gallery";

const Routes = () => {
  return (
    <Switch>
      <Route path="/bracket">
        <Bracket />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/guidance">
        <Guidance />
      </Route>
      <Route path="/medals">
        <Medals />
      </Route>
      <Route path="/schedulesResult">
        <SchedulesResult />
      </Route>
      <Route path="/statistic">
        <Statistic />
      </Route>
      <Route path="/teams">
        <Teams />
      </Route>
      <Route path="/photos">
        <Photos />
      </Route>
      <Route path="/videos">
        <Video />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/dummy/">
        <Dummy />
      </Route>
      <Route path="/detail-dummy/:id">
        <DetailDummy />
      </Route>
      <Route path="/tes">
        <Tes />
      </Route>

      {/* <Route path="/home">
        <Home />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route> */}
      <Route path="/home">
        <Home2 />
      </Route>
      <Route path="/" exact>
        <Home2 />
      </Route>
    </Switch>
  );
};

export default Routes;
