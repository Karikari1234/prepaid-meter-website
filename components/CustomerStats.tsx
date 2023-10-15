"use client";

import CustomerChart from "./CustomerChart";

const CustomerStats = () => {
  return (
    <div className="text-lg md:space-y-8">
      <h1 className="heading-text mb-4 !text-left !text-5xl">
        BPDB at a glance
      </h1>
      <p>
        The Bangladesh Power Development Board (BPDB) has achieved a significant
        milestone in its prepaid meter installation drive, with the total number
        of customers now exceeding 17.64 lakh (1.764 million).
      </p>
      <p>
        As of October 2023, BPDB has installed a total of 17,64,000 prepaid
        meters, which represents a significant increase from the previous year.
        In the past 12 months, BPDB has added over 3.3 lakh new prepaid meter
        customers.
      </p>
      <p>
        The month-wise data for new prepaid meter customers in 2022-23 is as
        follows:
      </p>
      <div className="h-96">
        <CustomerChart></CustomerChart>
      </div>
    </div>
  );
};

export default CustomerStats;
