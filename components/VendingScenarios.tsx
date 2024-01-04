import React from "react";

const PrepaidMeterCharges = () => {
  // Mocked tabular data for each scenario
  const scenariosData = [
    // Scenario 1
    [
      {
        chargeDetails: "Vat (5%)",
        calculation: "1000 x (5 / 105)",
        amount: 47.62,
      },
      {
        chargeDetails: "Demand Charge",
        calculation: "1 month x (2 Kwh x 35.00 BDT)",
        amount: 70.0,
      },
      {
        chargeDetails: "Meter Rent",
        calculation: "1 month x 35.00 BDT (Reduced from 40.00 BDT)",
        amount: 35.0,
      },
      { chargeDetails: "Total Charge", calculation: "", amount: 152.62 },
      {
        chargeDetails: "Rebate (1%)",
        calculation: "1/101 x (1000 - 47.62 - 35.00)",
        amount: 9.04,
      },
      {
        chargeDetails: "Total Energy",
        calculation: "1000 - 152.62 + 9.04",
        amount: 856.42,
      },
    ],
    // Scenario 2
    [
      {
        chargeDetails: "Vat (5%)",
        calculation: "1000 x (5 / 105)",
        amount: 47.62,
      },
      {
        chargeDetails: "Demand Charge",
        calculation: "0 month x (2 Kwh x 35.00 BDT)",
        amount: 0.0,
      },
      {
        chargeDetails: "Meter Rent",
        calculation: "0 month x 35.00 BDT (Reduced from 40.00 BDT)",
        amount: 0.0,
      },
      { chargeDetails: "Total Charge", calculation: "", amount: 47.62 },
      {
        chargeDetails: "Rebate (1%)",
        calculation: "1/101 x (1000 - 47.62)",
        amount: 9.43,
      },
      {
        chargeDetails: "Total Energy",
        calculation: "1000 - 47.62 + 9.43",
        amount: 961.81,
      },
    ],
    // Scenario 3
    [
      {
        chargeDetails: "Vat (5%)",
        calculation: "1000 x (5 / 105)",
        amount: 47.62,
      },
      {
        chargeDetails: "Demand Charge",
        calculation: "3 months x (2 Kwh x 35.00 BDT)",
        amount: 105.0,
      },
      {
        chargeDetails: "Meter Rent",
        calculation: "3 months x 35.00 BDT (Reduced from 40.00 BDT)",
        amount: 105.0,
      },
      { chargeDetails: "Total Charge", calculation: "", amount: 257.62 },
      {
        chargeDetails: "Total Energy",
        calculation: "1000 - 257.62 + 8.24",
        amount: 750.62,
      },
    ],
  ];

  return (
    <div className="p-4 font-sans">
      <h1 className="mb-4 text-2xl font-bold">
        Prepaid Meter Charges Explained
      </h1>

      <p className="mb-4">
        Prepaid meter consumers have to pay Meter Rent and Demand Charge as per
        the Govt. rule only for the 1st vending of the month. If a consumer buys
        the meter by a one-time payment, then the consumer does not have to pay
        meter rent monthly.
      </p>

      {/* Render scenarios */}
      {scenariosData.map((scenario, index) => (
        <div
          key={index}
          className="mb-8 space-y-4 text-base  md:mb-16 md:flex-row md:space-x-4 md:space-y-0"
        >
          <h4 className="text-md mb-4 !text-left font-bold md:mb-8">
            Vending Scenario {index + 1}
          </h4>

          <div className="mb-4">
            <table className="min-w-full overflow-hidden rounded-md border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border-b px-4 py-2">Charge Details</th>
                  <th className="border-b px-4 py-2">Calculation</th>
                  <th className="border-b px-4 py-2">Amount of Money (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {scenario.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border-b px-4 py-2">{row.chargeDetails}</td>
                    <td className="border-b px-4 py-2">{row.calculation}</td>
                    <td className="border-b px-4 py-2">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Additional Text */}

      <p className="mb-4">Prepaid meter consumers have to pay a 5% VAT.</p>

      <p className="mb-4">Prepaid meter consumers enjoy a 1% rebate.</p>

      <p className="mb-4">
        Before inserting the vending token into the meter, it's necessary to
        check the meter balance. If the meter balance is negative (due to
        emergency or friendly hour usage), then this negative balance will be
        deducted from the recharged amount.
      </p>

      <p>
        Consumers have to pay fixed charges (demand charge and meter rent) once
        per month. If any consumer does not vend for more than one month, then
        the due charges of previous months will be deducted during the next
        vending.
      </p>
    </div>
  );
};

export default PrepaidMeterCharges;
