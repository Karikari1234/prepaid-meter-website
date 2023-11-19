"use client";

import CustomerChart from "./CustomerChart";

const CustomerStats = () => {
  return (
    <div className="space-y-4 text-base  md:space-y-10">
      <h1 className="heading-text mb-5 !text-left !text-4xl">
        Prepaid Metering BPDB at a glance
      </h1>
      <p className="text-gray-700">
        The Bangladesh Power Development Board (BPDB) has achieved a significant
        milestone in its prepaid meter installation drive, with the total number
        of customers now exceeding 17.64 lakh (1.764 million).
      </p>
      <p className="text-gray-700">
        The month-wise data for new prepaid meter customers in 2022-23 is as
        follows:
      </p>
      <div className="h-96">
        <CustomerChart></CustomerChart>
      </div>
      <p className="text-gray-700">
        As of October 2023, BPDB has installed a total of 17,64,000 prepaid
        meters, which represents a significant increase from the previous year.
        In the past 12 months, BPDB has added over 3.3 lakh new prepaid meter
        customers.
      </p>
    </div>
  );
};

export default CustomerStats;
