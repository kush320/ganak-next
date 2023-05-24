import React from "react";
import { NepaliDate } from "nepali-date";
const NepaliDate = () => {
  const nepaliDate = new NepaliDate();
  const currentDate = nepaliDate.format("YYYY-MM-DD");

  return <p>{currentDate}</p>;
};

export default NepaliDate;
