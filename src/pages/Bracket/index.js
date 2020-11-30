import React, { useEffect } from 'react';
import { Dropdown, TabelBracket } from '../../components';
import {
  MDBTable,
  MDBTableBody,
  MDBBtn,
  MDBContainer,
  MDBAnimation,
} from 'mdbreact';
import {
  UsiaDini,
  PraPemula,
  Pemula,
  Kadet,
  Junior,
  Senior,
  Under21,
} from './data';

const Bracket = () => {
  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Bracket`;
  });

  return (
    <MDBContainer fluid>
      <MDBAnimation reveal type='fadeInUp'>
        <hr className='my-4' />
      </MDBAnimation>
      <MDBAnimation reveal type='fadeInUp'>
        <form>
          <MDBTable borderless>
            <MDBTableBody>
              <Dropdown
                label='Age Categories'
                selected='--ALL--'
                option={[
                  'Usia Dini',
                  'Pra Pemula',
                  'Pemula',
                  'Cadet',
                  'Junior',
                  'Senior',
                  'Under 21',
                  'Veteran',
                ]}
              />
              <Dropdown
                label='Gender'
                selected='--ALL--'
                option={['Male', 'Female']}
              />
              <Dropdown
                label='Categories'
                selected='--ALL--'
                option={['KATA', 'KUMITE']}
              />
              <Dropdown label='Class Categories' selected='--ALL--' />

              <tr>
                <td className='font-weight-normal'>Athlete Name</td>
                <td>:</td>
                <td className=' pt-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter athlete name'
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className='pl-1 pt-0'>
                  <MDBBtn color='primary'>Search</MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </form>
      </MDBAnimation>
      <MDBAnimation reveal type='fadeInUp'>
        <h3>Usia Dini</h3>
        <hr />
        <TabelBracket data={UsiaDini} />

        <h3>Pra Pemula</h3>
        <hr />
        <TabelBracket data={PraPemula} />

        <h3>Pemula</h3>
        <hr />
        <TabelBracket data={Pemula} />

        <h3>Kadet</h3>
        <hr />
        <TabelBracket data={Kadet} />

        <h3>Junior</h3>
        <hr />
        <TabelBracket data={Junior} />

        <h3>Under 21</h3>
        <hr />
        <TabelBracket data={Under21} />

        <h3>Senior</h3>
        <hr />
        <TabelBracket data={Senior} />
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Bracket;
