import React from "react";

const PrepaidMeterCharges = () => {
  // Mocked tabular data for each scenario
  const scenariosData = [
    // Scenario 1
    [
      {
        chargeDetails: "Demand Charge",
        calculation: "1 month x (2 Kwh x 35.00 BDT)",
        amount: 70.0,
      },
      {
        chargeDetails: "Meter Rent",
        calculation: "1 month x 40.00 BDT",
        amount: 40.0,
      },
      {
        chargeDetails: "Vat (5%)",
        calculation: "1000 x (5 / 105)",
        amount: 47.62,
      },
      {
        chargeDetails: "Rebate (1%)",
        calculation: "1/101 x (1000 - 47.62 - 40.00)",
        amount: -9.03,
      },

      {
        chargeDetails: "Energy Amount",
        calculation: "",
        amount: 851.41,
      },
    ],
    // Scenario 2
    [
      {
        chargeDetails: "Demand Charge",
        calculation: "0 month x (2 Kwh x 35.00 BDT)",
        amount: 0.0,
      },
      {
        chargeDetails: "Meter Rent",
        calculation: "0 month x 40.00 BDT",
        amount: 0.0,
      },
      {
        chargeDetails: "Vat (5%)",
        calculation: "1000 x (5 / 105)",
        amount: 47.62,
      },
      {
        chargeDetails: "Rebate (1%)",
        calculation: "1/101 x (1000 - 47.62 - 0.00)",
        amount: -9.43,
      },

      {
        chargeDetails: "Energy Amount",
        calculation: "",
        amount: 961.81,
      },
    ],
    // Scenario 3
    [
      {
        chargeDetails: "Demand Charge",
        calculation: "3 month x (2 Kwh x 35.00 BDT)",
        amount: 210.0,
      },
      {
        chargeDetails: "Meter Rent",
        calculation: "3 month x 40.00 BDT",
        amount: 120.0,
      },
      {
        chargeDetails: "Vat (5%)",
        calculation: "1000 x (5 / 105)",
        amount: 47.62,
      },
      {
        chargeDetails: "Rebate (1%)",
        calculation: "1/101 x (1000 - 47.62 - 120.00)",
        amount: -8.24,
      },
      {
        chargeDetails: "Energy Amount",
        calculation: "",
        amount: 630.62,
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
      {/*Add this*/}
      {/* <p className="mb-4">
        In the first scenario, the customer deos vending for the <b>1st</b> time
        in the month.In second scenario customer does vending <b>2nd</b> time in
        the same month. And in the third scenario, customer does vending after
        three months.
      </p> */}

      <p className="mb-4">
        In the first scenario, the customer deos vending for the <b>1st</b> time
        in the month.In second scenario customer does vending <b>2nd</b> time in
        the same month. And in the third scenario, customer does vending after
        three months.
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
                    <td
                      className={`border-b px-4 py-2 text-center ${
                        row.chargeDetails === "Energy Amount" ? "font-bold" : ""
                      }`}
                    >
                      {row.chargeDetails}
                    </td>
                    <td
                      className={`border-b px-4 py-2 text-center ${
                        row.chargeDetails === "Energy Amount" ? "font-bold" : ""
                      }`}
                    >
                      {row.calculation}
                    </td>
                    <td
                      className={`border-b px-4 py-2 text-center ${
                        row.chargeDetails === "Energy Amount" ? "font-bold" : ""
                      }`}
                    >
                      {row.amount}
                    </td>
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
        Before inserting the vending token into the meter, its necessary to
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
