"use client";

import { useState, useEffect } from 'react';
import { appliances } from '@/lib/appliance-menu';
  
  type Values = {
    [key: number]: {
      quantity?: number;
      dailyUsage?: number;
      monthlyUsage?: number;
      watt?: number;
    };
  };

const LoadCalculatorForm = () => {
  const [values, setValues] = useState<Values>({});
  const [totals, setTotals] = useState({ totalLoad: 0, dailyUsage: 0, monthlyUsage: 0 });

//   let appliances = [
//     { name: 'Lift for above 10 floors', defaultWatt: 10000 },
//     { name: 'Refrigerator', defaultWatt: 100 },
//     { name: 'Washing Machine', defaultWatt: 500 },
//     { name: '3-pin - B', defaultWatt: 600, description: 'Common areas and rooms' },
//     { name: '3-pin - D', defaultWatt: 150, description: 'Garage/Verandah/Garden' },
//     { name: 'Ceiling Fan/Table Fan', defaultWatt: 70 },
//     { name: 'B - Common Areas', defaultWatt: 60 },
//     { name: 'Iron', defaultWatt: 1000 },
//   ];

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedValues = { ...values };
    if (!updatedValues[index]) updatedValues[index] = {};
    updatedValues[index][field as 'quantity' | 'dailyUsage' | 'monthlyUsage' | 'watt'] = Number(value);
    setValues(updatedValues);
  };

  useEffect(() => {
    let totalLoad = 0;
    let dailyUsageTotal = 0;
    let monthlyUsageTotal = 0;

    Object.keys(values).forEach((idx) => {

      const key = parseInt(idx, 10);

      const quantity = values[key]?.quantity || 0;
      const dailyUsage = values[key]?.dailyUsage || 0;
      const monthlyUsage = values[key]?.monthlyUsage || 0;
      const watt = values[key]?.watt || appliances[key].defaultWatt;

      totalLoad += quantity * watt;
      dailyUsageTotal += dailyUsage;
      monthlyUsageTotal += monthlyUsage;
    });

    setTotals({ totalLoad, dailyUsage: dailyUsageTotal, monthlyUsage: monthlyUsageTotal });
  }, [values]);

  return (
    <div className="p-8 max-w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6">Load Calculator</h1>
      <p className="text-sm text-black-500 mt-4">
        Daily Usage (In Hours): The maximum value will be <span style={{ color: 'green' }}>24</span>. <br />
        Monthly Usage (In Days): The maximum value will be <span style={{ color: 'green' }}>31</span>.
      </p>
      <div className="flex justify-end mb-4">
      <label className="mr-2">Only for LT-A Residential Users</label>
        {/* <label className="mr-2">Type:</label>
        <select className="border rounded px-2 py-1">
          <option>Domestic</option>
          {/* Add more options if needed */}{/*
        </select> */} 
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-green text-white">
              <th className="p-2">Electrical Appliance</th>
              <th className="p-2">Watt</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Total Load</th>
              <th className="p-2">Daily Usage</th>
              <th className="p-2">Monthly Usage</th>
            </tr>
          </thead>
          <tbody>
            {appliances.map((appliance, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">
                  <div className="font-bold">{appliance.name}</div>
                  {appliance.description && (
                    <span className="text-sm text-gray-500">{appliance.description}</span>
                  )}
                </td>
                <td className="p-2 text-center">
                    <input type="number"
                    className="w-20 border rounded p-1 text-center"
                    value={values[index]?.watt || appliance.defaultWatt}
                    onChange={(e) => handleInputChange(index, 'watt', e.target.value)}/>
                    {/* {appliance.defaultWatt} */}
                    </td>
                <td className="p-2 text-center">
                  <input
                    type="number"
                    className="w-16 border rounded p-1 text-center"
                    value={values[index]?.quantity || ''}
                    onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                  />
                </td>
                <td className="p-2 text-center">
                  {(values[index]?.quantity || 0) * (values[index]?.watt || appliance.defaultWatt)}
                </td>
                <td className="p-2 text-center">
                  <input
                    type="number"
                    className="w-16 border rounded p-1 text-center"
                    value={values[index]?.dailyUsage || ''}
                    max={24}
                    min={0}
                    onChange={(e) => handleInputChange(index, 'dailyUsage', e.target.value)}
                    disabled={!values[index]?.quantity}
                  />
                </td>
                <td className="p-2 text-center">
                  <input
                    type="number"
                    className="w-16 border rounded p-1 text-center"
                    value={values[index]?.monthlyUsage || ''}
                    max={31}
                    min={0}
                    onChange={(e) => handleInputChange(index, 'monthlyUsage', e.target.value)}
                    disabled={!values[index]?.quantity}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-semibold">
              <td className="p-2 text-right" colSpan={3}>Total Load:</td>
              <td className="p-2 text-center">{totals.totalLoad/1000} kW</td>
              <td className="p-2 text-center whitespace-normal w-32">Total Monthly Consumption (kWh)
                {/* {totals.dailyUsage} */}
                </td>
              <td className="p-2 text-center">{totals.dailyUsage*totals.monthlyUsage*totals.totalLoad/1000}
                {/* {totals.monthlyUsage} */}
                </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default LoadCalculatorForm;
