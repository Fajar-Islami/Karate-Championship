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
      gold: '12',
      silver: '5',
      bronze: '1',
      total: '18',
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
      gold: '10',
      silver: '5',
      bronze: '2',
      total: '17',
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
      gold: '10',
      silver: '4',
      bronze: '3',
      total: '17',
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
      gold: '9',
      silver: '4',
      bronze: '4',
      total: '17',
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
      gold: '8',
      silver: '3',
      bronze: '0',
      total: '11',
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
      gold: '8',
      silver: '2',
      bronze: '0',
      total: '10',
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
      gold: '7',
      silver: '2',
      bronze: '0',
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
      gold: '7',
      silver: '1',
      bronze: '1',
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
      gold: '7',
      silver: '0',
      bronze: '0',
      total: '7',
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
      gold: '5',
      silver: '1',
      bronze: '1',
      total: '7',
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
      gold: '5',
      silver: '0',
      bronze: '0',
      total: '5',
    },

    {
      rangking: 12,
      flag: (
        <img
          src={Aceh}
          style={{ width: '25px', height: '25px' }}
          title='ACEH'
          alt='ACEH'
        />
      ),
      contingent: 'ACEH',
      gold: '4',
      silver: '0',
      bronze: '1',
      total: '5',
    },

    {
      rangking: 13,
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
      silver: '0',
      bronze: '1',
      total: '4',
    },

    {
      rangking: 14,
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
      silver: '0',
      bronze: '0',
      total: '3',
    },

    {
      rangking: 15,
      flag: (
        <img
          src={Yogyakarta}
          style={{ width: '25px', height: '25px' }}
          title='YOGYAKARTA B'
          alt='YOGYAKARTA B'
        />
      ),
      contingent: 'YOGYAKARTA B',
      gold: '2',
      silver: '1',
      bronze: '0',
      total: '3',
    },

    {
      rangking: 16,
      flag: (
        <img
          src={JawaTimur}
          style={{ width: '25px', height: '25px' }}
          title='JAWA TIMUR I'
          alt='JAWA TIMUR I'
        />
      ),
      contingent: 'JAWA TIMUR I',
      gold: '2',
      silver: '0',
      bronze: '0',
      total: '2',
    },

    {
      rangking: 17,
      flag: (
        <img
          src={Yogyakarta}
          style={{ width: '25px', height: '25px' }}
          title='YOGYAKARTA'
          alt='YOGYAKARTA'
        />
      ),
      contingent: 'YOGYAKARTA',
      gold: '1',
      silver: '0',
      bronze: '0',
      total: '1',
    },

    {
      rangking: 18,
      flag: (
        <img
          src={Banten}
          style={{ width: '25px', height: '25px' }}
          title='BANTEN I'
          alt='BANTEN I'
        />
      ),
      contingent: 'BANTEN I',
      gold: '0',
      silver: '0',
      bronze: '1',
      total: '1',
    },

    {
      rangking: 19,
      flag: (
        <img
          src={MalukuUtara}
          style={{ width: '25px', height: '25px' }}
          title='MALUKU UTARA'
          alt='MALUKU UTARA'
        />
      ),
      contingent: 'MALUKU UTARA',
      gold: '0',
      silver: '0',
      bronze: '1',
      total: '1',
    },

    {
      rangking: 20,
      flag: (
        <img
          src={Riau}
          style={{ width: '25px', height: '25px' }}
          title='RIAU '
          alt='RIAU '
        />
      ),
      contingent: 'RIAU',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 21,
      flag: (
        <img
          src={KepulauanBangkaBelitung}
          style={{ width: '25px', height: '25px' }}
          title='KEPULAUAN BANGKA BELITUNG'
          alt='KEPULAUAN BANGKA BELITUNG'
        />
      ),
      contingent: 'KEPULAUAN BANGKA BELITUNG',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 22,
      flag: (
        <img
          src={Bali}
          style={{ width: '25px', height: '25px' }}
          title='BALI II'
          alt='BALI II'
        />
      ),
      contingent: 'BALI II',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 23,
      flag: (
        <img
          src={SumateraSelatan}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA SELATAN'
          alt='SUMATERA SELATAN'
        />
      ),
      contingent: 'SUMATERA SELATAN',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 24,
      flag: (
        <img
          src={Bali}
          style={{ width: '25px', height: '25px' }}
          title='BALI III'
          alt='BALI III'
        />
      ),
      contingent: 'BALI III',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 25,
      flag: (
        <img
          src={SulawesiSelatan}
          style={{ width: '25px', height: '25px' }}
          title='SULAWESI SELATAN I'
          alt='SULAWESI SELATAN I'
        />
      ),
      contingent: 'SULAWESI SELATAN I',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 26,
      flag: (
        <img
          src={SumateraBarat}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA BARAT I'
          alt='SUMATERA BARAT I'
        />
      ),
      contingent: 'SUMATERA BARAT I',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 27,
      flag: (
        <img
          src={Banten}
          style={{ width: '25px', height: '25px' }}
          title='BANTEN II'
          alt='BANTEN II'
        />
      ),
      contingent: 'BANTEN II',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 28,
      flag: (
        <img
          src={SulawesiUtara}
          style={{ width: '25px', height: '25px' }}
          title='SULAWESI UTARA'
          alt='SULAWESI UTARA'
        />
      ),
      contingent: 'SULAWESI UTARA',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 29,
      flag: (
        <img
          src={Bali}
          style={{ width: '25px', height: '25px' }}
          title='BALI IV'
          alt='BALI IV'
        />
      ),
      contingent: 'BALI IV',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 30,
      flag: (
        <img
          src={KalimantanUtara}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN UTARA I'
          alt='KALIMANTAN UTARA I'
        />
      ),
      contingent: 'KALIMANTAN UTARA I',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 31,
      flag: (
        <img
          src={KalimantanSelatan}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN SELATAN'
          alt='KALIMANTAN SELATAN'
        />
      ),
      contingent: 'KALIMANTAN SELATAN',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 32,
      flag: (
        <img
          src={SumateraUtara}
          style={{ width: '25px', height: '25px' }}
          title='SUMATERA UTARA'
          alt='SUMATERA UTARA'
        />
      ),
      contingent: 'SUMATERA UTARA',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 33,
      flag: (
        <img
          src={KepulauanRiau}
          style={{ width: '25px', height: '25px' }}
          title='LEMKARI KEPRI'
          alt='LEMKARI KEPRI'
        />
      ),
      contingent: 'LEMKARI KEPRI',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 34,
      flag: (
        <img
          src={KalimantanTengah}
          style={{ width: '25px', height: '25px' }}
          title='KALIMANTAN TENGAH I'
          alt='KALIMANTAN TENGAH I'
        />
      ),
      contingent: 'KALIMANTAN TENGAH I',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 35,
      flag: (
        <img
          src={PapuaBarat}
          style={{ width: '25px', height: '25px' }}
          title='PAPUA BARAT'
          alt='PAPUA BARAT'
        />
      ),
      contingent: 'PAPUA BARAT',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 36,
      flag: (
        <img
          src={KalimantanTimur}
          style={{ width: '25px', height: '25px' }}
          title='KALIMATAN TIMUR I'
          alt='KALIMATAN TIMUR I'
        />
      ),
      contingent: 'KALIMATAN TIMUR 1',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },

    {
      rangking: 37,
      flag: (
        <img
          src={Riau}
          style={{ width: '25px', height: '25px' }}
          title='RIAU I'
          alt='RIAU I'
        />
      ),
      contingent: 'RIAU I',
      gold: '0',
      silver: '0',
      bronze: '0',
      total: '0',
    },
  ],
};

export { medalsFull };
