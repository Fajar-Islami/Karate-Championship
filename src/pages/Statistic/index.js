import React, { useState, useEffect } from "react";
import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";
import { IsiTabs, TabelStatistics } from "../../components";
import { Male_UsiaDini } from "./data";

const Statistic = () => {
  const [activeItem, setActiveItem] = useState("1");

  const handleToggle = (tab) => (e) => {
    console.log(tab);
    if (activeItem !== tab) {
      // console.log('beda');
      setActiveItem((activeItem) => tab);
    }
  };

  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Statistic`;
    // console.log(activeItem);
  });

  return (
    <MDBContainer fluid>
      <MDBAnimation reveal type='fadeInUp'>
        <hr className='my-4' />
      </MDBAnimation>
      <MDBAnimation reveal type='fadeInUp'>
        {/* <MDBNav className='nav-tabs '>
          <MDBNavItem>
            <MDBNavLink
              link
              to='#'
              active={activeItem === '1'}
              onClick={handleToggle('1')}
              role='tab'>
              Rangking
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to='#'
              active={activeItem === '2'}
              onClick={handleToggle('2')}
              role='tab'>
              Summary
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to='#'
              active={activeItem === '3'}
              onClick={handleToggle('3')}
              role='tab'>
              By Point
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav> */}

        <div className='block-example border border-primary p-3 '>
          {/* <div className="block-example border border-dark"> */}
          {/* Content */}
          {/* <MDBTabContent activeItem={activeItem}> */}
          {/* <MDBTabPane tabId='1' role='tabpanel'> */}
          <IsiTabs
            label='Male Usia Dini'
            tableType={[
              <TabelStatistics tableTitle='KATA TEAM' />,
              <TabelStatistics
                data={Male_UsiaDini.data_KataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics data={Male_UsiaDini.data_KumiteMin30} tableTitle='KUMITE -30 KG' />,
              <TabelStatistics data={Male_UsiaDini.data_KumitePlus30} tableTitle='KUMITE +30 KG' />,
            ]}
          />
          <IsiTabs
            label='Female Usia Dini'
            tableType={[
              <TabelStatistics tableTitle='KATA TEAM' />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleDiniKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleDiniKumiteMin25}
                tableTitle='KUMITE -25 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleDiniKumitePlus25}
                tableTitle='KUMITE +25 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Male Pra Pemula'
            tableType={[
              <TabelStatistics tableTitle='KATA TEAM' />,
              <TabelStatistics
                data={Male_UsiaDini.data_MalePraKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MalePraKumiteMin40}
                tableTitle='KUMITE -40 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MalePraKumiteMin35}
                tableTitle='KUMITE -35 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MalePraKumitePlus40}
                tableTitle='KUMITE +40 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Female Pra Pemula'
            tableType={[
              <TabelStatistics tableTitle='KATA TEAM' />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemalePraKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemalePraKumiteMin35}
                tableTitle='KUMITE -35 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemalePraKumiteMin30}
                tableTitle='KUMITE -30 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemalePraKumitePlus35}
                tableTitle='KUMITE +35 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Male Pemula'
            tableType={[
              <TabelStatistics tableTitle='KATA TEAM' />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleKumiteMin55}
                tableTitle='KUMITE -55 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleKumiteMin50}
                tableTitle='KUMITE -50 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleKumiteMin45}
                tableTitle='KUMITE -45 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleKumiteMin40}
                tableTitle='KUMITE -40 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleKumitePlus55}
                tableTitle='KUMITE +55 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Female Pemula'
            tableType={[
              <TabelStatistics tableTitle='KATA TEAM' />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleKumiteMin47}
                tableTitle='KUMITE -47 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleKumiteMin42}
                tableTitle='KUMITE -42 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleKumitePlus47}
                tableTitle='KUMITE +47 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Male Cadet'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_MaleCadetKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleCadetKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleCadetKumiteMin70}
                tableTitle='KUMITE -70 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleCadetKumiteMin63}
                tableTitle='KUMITE -63 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleCadetKumiteMin57}
                tableTitle='KUMITE -57 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleCadetKumiteMin52}
                tableTitle='KUMITE -52 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleCadetKumitePlus70}
                tableTitle='KUMITE +70 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Female Cadet'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleCadetKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleCadetKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleCadetKumiteMin54}
                tableTitle='KUMITE -54 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Male Junior'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_MaleJuniorKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleJuniorKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleJuniorKumiteMin68}
                tableTitle='KUMITE -68 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleJuniorKumiteMin61}
                tableTitle='KUMITE -61 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleJuniorKumiteMin55}
                tableTitle='KUMITE -55 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleJuniorKumitePlus76}
                tableTitle='KUMITE +76 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleJuniorKumiteMin76}
                tableTitle='KUMITE -76 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Female Junior'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleJuniorKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleJuniorKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleJuniorKumiteMin59}
                tableTitle='KUMITE -59 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleJuniorKumiteMin53}
                tableTitle='KUMITE -53 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleJuniorKumiteMin48}
                tableTitle='KUMITE -48 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleJuniorKumitePlus59}
                tableTitle='KUMITE +59 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Male Senior'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_MaleSeniorKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleSeniorKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleSeniorKumiteMin84}
                tableTitle='KUMITE -84 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleSeniorKumiteMin75}
                tableTitle='KUMITE -75 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleSeniorKumiteMin67}
                tableTitle='KUMITE -67 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleSeniorKumiteMin60}
                tableTitle='KUMITE -60 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleSeniorKumitePlus84}
                tableTitle='KUMITE +84 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Female Senior'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleSeniorKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics tableTitle='KATA TEAM' />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleSeniorKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics tableTitle='KUMITE +68 KG' />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleSeniorKumiteMin68}
                tableTitle='KUMITE -68 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleSeniorKumiteMin61}
                tableTitle='KUMITE -61 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleSeniorKumiteMin55}
                tableTitle='KUMITE -55 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleSeniorKumiteMin50}
                tableTitle='KUMITE -50 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Male Under 21'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_MaleUnderKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleUnderKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics tableTitle='KUMITE -84 KG' />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleUnderKumiteMin75}
                tableTitle='KUMITE -75 KG'
              />,
              <TabelStatistics tableTitle='KUMITE -68 KG' />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleUnderKumiteMin67}
                tableTitle='KUMITE -67 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleUnderKumiteMin60}
                tableTitle='KUMITE -60 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_MaleUnderKumitePlus84}
                tableTitle='KUMITE +84 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Female Under 21'
            tableType={[
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleUnderKumiteMin55}
                tableTitle='KUMITE -55 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleUnderKumiteMin50}
                tableTitle='KUMITE -50 KG'
              />,
              <TabelStatistics tableTitle='KUMITE +68 KG' />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleUnderKumiteBest}
                tableTitle='KUMITE BEST OF THE BEST'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleUnderKataIndividual}
                tableTitle='KATA INDIVIDUAL'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleUnderKumiteMin68}
                tableTitle='KUMITE -68 KG'
              />,
              <TabelStatistics
                data={Male_UsiaDini.data_FemaleUnderKumiteMin61}
                tableTitle='KUMITE -61 KG'
              />,
            ]}
          />
          <IsiTabs
            label='Male Veteran'
            tableType={[<TabelStatistics tableTitle='KATA INDIVIDUAL' />]}
          />
          <IsiTabs
            label='Female Veteran'
            tableType={[<TabelStatistics tableTitle='KATA INDIVIDUAL' />]}
          />
          {/* </MDBTabPane> */}

          {/* <MDBTabPane tabId='2' role='tabpanel'>
              <IsiTabs
                label='Male Usia Dini'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Usia Dini'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Pra Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Pra Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Cadet'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Cadet'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Junior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Junior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Senior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Senior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Under 21'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Veteran'
                tableType={[<TabelStatistics tableTitle='KATA INDIVIDUAL' />]}
              />
              <IsiTabs
                label='Female Veteran'
                tableType={[<TabelStatistics tableTitle='KATA INDIVIDUAL' />]}
              />
            </MDBTabPane>

            <MDBTabPane tabId='3' role='tabpanel'>
              <IsiTabs
                label='Male Usia Dini'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Usia Dini'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Pra Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Pra Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Pemula'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Cadet'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Cadet'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Junior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Junior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Senior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Senior'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Female Under 21'
                tableType={[
                  <TabelStatistics tableTitle='KATA TEAM' />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KATA INDIVIDUAL'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE -30 KG'
                  />,
                  <TabelStatistics
                    data={Male_UsiaDini.data_KataIndividual}
                    tableTitle='KUMITE +30 KG'
                  />,
                ]}
              />
              <IsiTabs
                label='Male Veteran'
                tableType={[<TabelStatistics tableTitle='KATA INDIVIDUAL' />]}
              />
              <IsiTabs
                label='Female Veteran'
                tableType={[<TabelStatistics tableTitle='KATA INDIVIDUAL' />]}
              />
            </MDBTabPane>
          </MDBTabContent> */}
          {/* </div> */}
        </div>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Statistic;
