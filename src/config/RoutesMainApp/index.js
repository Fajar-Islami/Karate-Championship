import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Bracket,
  Categories,
  Guidance,
  Medals,
  SchedulesResult,
  Statistic,
  Teams,
  Registration,
  Home,
  News,
  DetailNews,
} from "../../pages";
import { Photos, Video } from "../../pages/Gallery";
import { HeaderJudul } from "../../components";

const Routes = () => {
  return (
    <Switch>
      <Route path='/bracket' exact>
        <HeaderJudul judul='BRACKET' />
        <Bracket />
      </Route>
      <Route path='/categories' exact>
        <HeaderJudul judul='CATEGORIES' />
        <Categories />
      </Route>
      <Route path='/guidance' exact>
        <HeaderJudul judul='GUIDANCE' />
        <Guidance />
      </Route>
      <Route path='/medals' exact>
        <HeaderJudul judul='MEDALS' />
        <Medals />
      </Route>
      <Route path='/schedulesResult' exact>
        <HeaderJudul judul='SCHEDULES & RESULTS' />
        <SchedulesResult />
      </Route>
      <Route path='/statistic' exact>
        <HeaderJudul judul='STATISTICS' />
        <Statistic />
      </Route>
      <Route path='/teams' exact>
        <HeaderJudul judul='TEAMS' />
        <Teams />
      </Route>
      {/* <Route path='/photos' exact>
        <HeaderJudul judul='PHOTOS' />
        <Photos />
      </Route> */}
      {/* <Route path='/videos' exact>
        <HeaderJudul judul='VIDEOS' />
        <Video />
      </Route> */}
      <Route path='/registration' exact>
        <HeaderJudul judul='REGISTRATION' />
        <Registration />
      </Route>
      <Route path='/news/detailnews/:id' exact>
        <HeaderJudul judul='NEWS' />
        <DetailNews />
      </Route>
      <Route path='/news/' exact>
        <HeaderJudul judul='NEWS' />
        <News />
      </Route>
      <Route path='/home' exact>
        <Home />
      </Route>
      <Route path='/' exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
