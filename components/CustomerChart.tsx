import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "July, 2022",
    newCustomerNo: 17316,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "August, 2022",
    newCustomerNo: 20905,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sept, 2022",
    newCustomerNo: 29708,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "October, 2022",
    newCustomerNo: 27538,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Nov, 2022",
    newCustomerNo: 27496,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Dec, 2022",
    newCustomerNo: 34449,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "January, 2023",
    newCustomerNo: 39356,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "February, 2023",
    newCustomerNo: 25840,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "March, 2023",
    newCustomerNo: 24743,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "April, 2023",
    newCustomerNo: 19467,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "May, 2023",
    newCustomerNo: 23682,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "June, 2023",
    newCustomerNo: 27795,
    pv: 4300,
    amt: 2100,
  },
];
const CustomerChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="newCustomerNo"
          stroke="#00513D"
          activeDot={{ r: 8 }}
          name="Number of new customer connections per month"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomerChart;
