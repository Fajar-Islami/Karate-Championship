import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Bracket, Categories, Guidance, Medals, SchedulesResult, Statistic, Teams, Home, Registration, Tes, Home2, News2, DetailNews } from "../../pages";
import { Photos, Video } from "../../pages/Gallery";
import { HeaderJudul } from "../../components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/bracket">
        <HeaderJudul judul="BRACKET" />
        <Bracket />
      </Route>
      <Route path="/categories">
        <HeaderJudul judul="CATEGORIES" />
        <Categories />
      </Route>
      <Route path="/guidance">
        <HeaderJudul judul="GUIDANCE" />
        <Guidance />
      </Route>
      <Route path="/medals">
        <HeaderJudul judul="MEDALS" />
        <Medals />
      </Route>
      <Route path="/schedulesResult">
        <HeaderJudul judul="SCHEDULES & RESULTS" />
        <SchedulesResult />
      </Route>
      <Route path="/statistic">
        <HeaderJudul judul="STATISTICS" />
        <Statistic />
      </Route>
      <Route path="/teams">
        <HeaderJudul judul="TEAMS" />
        <Teams />
      </Route>
      <Route path="/photos">
        <HeaderJudul judul="PHOTOS" />
        <Photos />
      </Route>
      <Route path="/videos">
        <HeaderJudul judul="VIDEOS" />
        <Video />
      </Route>
      <Route path="/registration">
        <HeaderJudul judul="REGISTRATION" />
        <Registration />
      </Route>
      <Route path="/news/">
        <HeaderJudul judul="NEWS" />
        <News2 />
      </Route>
      {/* <Route path="/detail-news/:id">
        <DetailNews />
      </Route> */}
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
