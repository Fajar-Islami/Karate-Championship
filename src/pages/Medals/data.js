import {
  Aceh,
  Bali,
  Banten,
  Bengkulu,
  Jakarta,
  JawaBarat,
  JawaTengah,
  JawaTimur,
  KalimantanBarat,
  KalimantanSelatan,
  KalimantanUtara,
  KalimantanTengah,
  KalimantanTimur,
  KepulauanBangkaBelitung,
  KepulauanRiau,
  Lampung,
  Maluku,
  MalukuUtara,
  NusaTenggaraBarat,
  PapuaBarat,
  Riau,
  SulawesiSelatan,
  SulawesiTenggara,
  SulawesiUtara,
  SumateraBarat,
  SumateraSelatan,
  SumateraUtara,
  Yogyakarta,
} from '../../assets/index';

import { ICGoldM, ICSilverM, ICBronzeM } from '../../assets';
import React from 'react';

const medalsFull = {
  columns: [
    {
      label: 'Rangking',
      field: 'rangking',
      attributes: {
        sort: 'asc',
        width: '5%',
      },
    },
    {
      label: 'Flag',
      field: 'flag',
      attributes: {
        sort: 'asc',
        width: '5%',
      },
    },
    {
      label: 'Contingent',
      field: 'contingent',
      attributes: {
        sort: 'asc',
      },
      pl: 'pl-3',
    },
    {
      label: <img src={ICGoldM} style={{ height: '30px' }} />,
      field: 'gold',
      attributes: {
        sort: 'asc',
        width: '5%',
      },
    },
    {
      label: <img src={ICSilverM} style={{ height: '30px' }} />,
      field: 'silver',
      attributes: {
        sort: 'asc',
        width: '5%',
      },
    },
    {
      label: <img src={ICBronzeM} style={{ height: '30px' }} />,
      field: 'bronze',
      attributes: {
        sort: 'asc',
        width: '5%',
      },
    },
    {
      label: 'Total',
      field: 'total',
      attributes: {
        sort: 'asc',
        width: '5%',
      },
    },
  ],
  rows: [
    {
      rangking: 1,
      flag: (
        <img
          src={Jakarta}
          style={{ width: '25px', height: '25px' }}
          title='Jakarta'
          alt='Jakarta'
        />
      ),
      contingent: 'Jakarta',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 2,
      flag: (
        <img
          src={KalimantanSelatan}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN SELATAN'
          alt='KALIMANTAN SELATAN'
        />
      ),
      contingent: 'KALIMANTAN SELATAN',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 3,
      flag: (
        <img
          src={Lampung}
          style={{ width: '25px', height: '25px' }}
          title='LAMPUNG'
          alt='LAMPUNG'
        />
      ),
      contingent: 'LAMPUNG',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 4,
      flag: (
        <img
          src={SulawesiSelatan}
          style={{ width: '25px', height: '25px' }}
          title='SULAWESI SELATAN'
          alt='SULAWESI SELATAN'
        />
      ),
      contingent: 'SULAWESI SELATAN',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 5,
      flag: (
        <img
          src={JawaBarat}
          style={{ width: '25px', height: '25px' }}
          title='JAWA BARAT B'
          alt='JAWA BARAT B'
        />
      ),
      contingent: 'JAWA BARAT B',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 6,
      flag: (
        <img
          src={JawaTengah}
          style={{ width: '25px', height: '25px' }}
          title='JAWA TENGAH'
          alt='JAWA TENGAH'
        />
      ),
      contingent: 'JAWA TENGAH',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 7,
      flag: (
        <img
          src={JawaTimur}
          style={{ width: '25px', height: '25px' }}
          title='JAWA TIMUR'
          alt='JAWA TIMUR'
        />
      ),
      contingent: 'JAWA TIMUR',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 8,
      flag: (
        <img
          src={JawaBarat}
          style={{ width: '25px', height: '25px' }}
          title='JAWA BARAT A'
          alt='JAWA BARAT A'
        />
      ),
      contingent: 'JAWA BARAT A',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 9,
      flag: (
        <img
          src={SumateraSelatan}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA SELATAN'
          alt='SUMATERA SELATAN'
        />
      ),
      contingent: 'SUMATERA SELATAN',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 10,
      flag: (
        <img
          src={SumateraBarat}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA BARAT'
          alt='SUMATERA BARAT'
        />
      ),
      contingent: 'SUMATERA BARAT',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 11,
      flag: (
        <img
          src={Bali}
          style={{ width: '25px', height: '25px' }}
          title='BALI 1'
          alt='BALI 1'
        />
      ),
      contingent: 'BALI 1',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 20,
      flag: (
        <img
          src={Aceh}
          style={{ width: '25px', height: '25px' }}
          title='ACEH'
          alt='ACEH'
        />
      ),
      contingent: 'ACEH',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 21,
      flag: (
        <img
          src={Maluku}
          style={{ width: '25px', height: '25px' }}
          title='MALUKU'
          alt='MALUKU'
        />
      ),
      contingent: 'MALUKU',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 22,
      flag: (
        <img
          src={KalimantanTimur}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN TIMUR'
          alt='KALIMANTAN TIMUR'
        />
      ),
      contingent: 'KALIMANTAN TIMUR',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 23,
      flag: (
        <img
          src={Yogyakarta}
          style={{ width: '25px', height: '25px' }}
          title='YOGYAKARTA B'
          alt='YOGYAKARTA B'
        />
      ),
      contingent: 'YOGYAKARTA B',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 24,
      flag: (
        <img
          src={JawaTimur}
          style={{ width: '25px', height: '25px' }}
          title='JAWA TIMUR I'
          alt='JAWA TIMUR I'
        />
      ),
      contingent: 'JAWA TIMUR I',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 25,
      flag: (
        <img
          src={Yogyakarta}
          style={{ width: '25px', height: '25px' }}
          title='YOGYAKARTA'
          alt='YOGYAKARTA'
        />
      ),
      contingent: 'YOGYAKARTA',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 26,
      flag: (
        <img
          src={Banten}
          style={{ width: '25px', height: '25px' }}
          title='BANTEN I'
          alt='BANTEN I'
        />
      ),
      contingent: 'BANTEN I',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 27,
      flag: (
        <img
          src={MalukuUtara}
          style={{ width: '25px', height: '25px' }}
          title='MALUKU UTARA'
          alt='MALUKU UTARA'
        />
      ),
      contingent: 'MALUKU UTARA',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 28,
      flag: (
        <img
          src={Riau}
          style={{ width: '25px', height: '25px' }}
          title='RIAU '
          alt='RIAU '
        />
      ),
      contingent: 'RIAU',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 29,
      flag: (
        <img
          src={KepulauanBangkaBelitung}
          style={{ width: '25px', height: '25px' }}
          title='KEPULAUAN BANGKA BELITUNG'
          alt='KEPULAUAN BANGKA BELITUNG'
        />
      ),
      contingent: 'KEPULAUAN BANGKA BELITUNG',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 30,
      flag: (
        <img
          src={Bali}
          style={{ width: '25px', height: '25px' }}
          title='BALI II'
          alt='BALI II'
        />
      ),
      contingent: 'BALI II',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 31,
      flag: (
        <img
          src={SumateraSelatan}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA SELATAN'
          alt='SUMATERA SELATAN'
        />
      ),
      contingent: 'SUMATERA SELATAN',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 32,
      flag: (
        <img
          src={Bali}
          style={{ width: '25px', height: '25px' }}
          title='BALI III'
          alt='BALI III'
        />
      ),
      contingent: 'BALI III',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 33,
      flag: (
        <img
          src={SulawesiSelatan}
          style={{ width: '25px', height: '25px' }}
          title='SULAWESI SELATAN I'
          alt='SULAWESI SELATAN I'
        />
      ),
      contingent: 'SULAWESI SELATAN I',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 34,
      flag: (
        <img
          src={SumateraBarat}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA BARAT I'
          alt='SUMATERA BARAT I'
        />
      ),
      contingent: 'SUMATERA BARAT I',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 35,
      flag: (
        <img
          src={Banten}
          style={{ width: '25px', height: '25px' }}
          title='BANTEN II'
          alt='BANTEN II'
        />
      ),
      contingent: 'BANTEN II',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 36,
      flag: (
        <img
          src={SulawesiUtara}
          style={{ width: '25px', height: '25px' }}
          title='SULAWESI UTARA'
          alt='SULAWESI UTARA'
        />
      ),
      contingent: 'SULAWESI UTARA',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 37,
      flag: (
        <img
          src={Bali}
          style={{ width: '25px', height: '25px' }}
          title='BALI IV'
          alt='BALI IV'
        />
      ),
      contingent: 'BALI IV',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 38,
      flag: (
        <img
          src={KalimantanUtara}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN UTARA I'
          alt='KALIMANTAN UTARA I'
        />
      ),
      contingent: 'KALIMANTAN UTARA I',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 39,
      flag: (
        <img
          src={KalimantanSelatan}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN SELATAN'
          alt='KALIMANTAN SELATAN'
        />
      ),
      contingent: 'KALIMANTAN SELATAN',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 40,
      flag: (
        <img
          src={SumateraUtara}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA UTARA'
          alt='SUMATERA UTARA'
        />
      ),
      contingent: 'SUMATERA UTARA',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 41,
      flag: (
        <img
          src={KepulauanRiau}
          style={{ width: '25px', height: '25px' }}
          title='LEMKARI KEPRI'
          alt='LEMKARI KEPRI'
        />
      ),
      contingent: 'LEMKARI KEPRI',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 42,
      flag: (
        <img
          src={KalimantanTengah}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN TENGAH I'
          alt='KALIMANTAN TENGAH I'
        />
      ),
      contingent: 'KALIMANTAN TENGAH I',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 43,
      flag: (
        <img
          src={PapuaBarat}
          style={{ width: '25px', height: '25px' }}
          title='PAPUA BARAT'
          alt='PAPUA BARAT'
        />
      ),
      contingent: 'PAPUA BARAT',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 44,
      flag: (
        <img
          src={KalimantanTimur}
          style={{ width: '25px', height: '25px' }}
          title='KALIMATAN TIMUR I'
          alt='KALIMATAN TIMUR I'
        />
      ),
      contingent: 'KALIMATAN TIMUR 1',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },

    {
      rangking: 45,
      flag: (
        <img
          src={Riau}
          style={{ width: '25px', height: '25px' }}
          title='RIAU I'
          alt='RIAU I'
        />
      ),
      contingent: 'RIAU I',
      gold: '3',
      silver: '3',
      bronze: '3',
      total: '9',
    },
  ],
};

export { medalsFull };
