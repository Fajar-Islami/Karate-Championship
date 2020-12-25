import React, { useEffect, useState } from 'react';
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
  Veteran
} from './data';

const Bracket = () => {
  const [ageCategories, setAgeCategories] = useState('--ALL--')
  const [gender, setGender] = useState('--ALL--')
  const [categories, setCategories] = useState('--ALL--')

  // Lifecycle React Hooks
  useEffect(() => {
    document.title = `Bracket`;
    console.log(ageCategories);
  },[ageCategories]);
  // useEffect(() => {
  //   console.log(gender);
  // },[gender]);
  // useEffect(() => {
  //   console.log(categories);
  // },[categories]);


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
                option={[
                  '--ALL--',
                  'Usia Dini',
                  'Pra Pemula',
                  'Pemula',
                  'Cadet',
                  'Junior',
                  'Senior',
                  'Under 21',
                  'Veteran',
                ]
              }
              onClick={(value)=>setAgeCategories(value)}
              />

              <Dropdown
                label='Gender'
                option={[ '--ALL--','Male', 'Female']}
                onClick={(value)=>setGender(value)}
              />

              <Dropdown
                label='Categories'
                option={[ '--ALL--','KATA', 'KUMITE']}
                onClick={(value)=>setCategories(value)}
              />

              <Dropdown label='Class Categories'  option={[ '--ALL--']}/>

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
        { ageCategories === 'Usia Dini' || ageCategories === '--ALL--' ?
        <>
          <h3>Usia Dini</h3>
          <hr />
          <TabelBracket data={UsiaDini} gender={gender} />
          </> : null
        }

{ ageCategories === 'Pra Pemula' || ageCategories === '--ALL--' ?
<>
        <h3>Pra Pemula</h3>
        <hr />
        <TabelBracket data={PraPemula} gender={gender}  />
        </> : null
      }

        { ageCategories === 'Pemula' || ageCategories === '--ALL--' ?
        <>
        <h3>Pemula</h3>
        <hr />
        <TabelBracket data={Pemula} gender={gender} />
        </> : null
      }
       
      { ageCategories === 'Kadet' || ageCategories === '--ALL--' ?
      <>
        <h3>Kadet</h3>
        <hr />
        <TabelBracket data={Kadet} gender={gender} />
        </> : null
    }

    { ageCategories === 'Junior' || ageCategories === '--ALL--' ?
    <>
        <h3>Junior</h3>
        <hr />
        <TabelBracket data={Junior} gender={gender} />
        </> : null
  }

  { ageCategories === 'Under 21' || ageCategories === '--ALL--' ?
  <>
        <h3>Under 21</h3>
        <hr />
        <TabelBracket data={Under21} gender={gender} />
        </> : null
  }

  { ageCategories === 'Senior' || ageCategories === '--ALL--' ?
  <>
        <h3>Senior</h3>
        <hr />
        <TabelBracket data={Senior} gender={gender} />
        </> : null
  }

  { ageCategories === 'Veteran' || ageCategories === '--ALL--' ?
  <>
        <h3>Veteran</h3>
        <hr />
        <TabelBracket data={Veteran} gender={gender} />
        </> : null
  }

      </MDBAnimation>
    </MDBContainer>
  );
};

export default Bracket;
