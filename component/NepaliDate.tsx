import React from 'react';
// const NepaliDate= require('nepali-date-converter')
import * as NepaliDate from "nepali-date-converter"
// import { NepaliDate } from 'nepali-date-converter';

const Nepalidate = () => {
  // const currentDate = new Date();

  // Convert the Gregorian date to Nepali date
  const nepaliDate = NepaliDate.default.fromAD(new Date());
  // Extract individual components of the Nepali date
  // const { getYear, getMonth, getDay } = nepaliDate;
  return (
    <div>
    <h1>Current Nepali Date</h1>
    <p>Year: {nepaliDate.getYear()}</p>
    <p>Month: {nepaliDate.getMonth()}</p>
    <p>Day: {nepaliDate.getDay()}</p>
  </div>
  );
};

export default Nepalidate;
