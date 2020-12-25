import React, { useState, useEffect } from 'react';
import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBAnimation,
  MDBDataTable,
} from 'mdbreact';

import { IsiTabs, TabelStatistics } from '../../components';
import { Male_UsiaDini } from './data';

const Statistic = () => {
  const [activeItem, setActiveItem] = useState('1');

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
        <MDBNav className='nav-tabs '>
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
        </MDBNav>

        <div className='block-example border border-primary p-3 '>
          {/* <div className="block-example border border-dark"> */}
          {/* Content */}
          <MDBTabContent activeItem={activeItem}>
            <MDBTabPane tabId='1' role='tabpanel'>
              <MDBDataTable
                responsive
                hover
                className='tabel-biru'
                striped
                bordered
                small
                order={['age', 'asc']}
                data={Male_UsiaDini.data_KataIndividual}
              />
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

            <MDBTabPane tabId='2' role='tabpanel'>
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
          </MDBTabContent>
          {/* </div> */}
        </div>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Statistic;
