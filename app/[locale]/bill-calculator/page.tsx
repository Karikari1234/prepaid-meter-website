import { EnergyCalculatorForm } from "@/components/BillCalculator";

const BillCalculator = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="border border-gray-200 rounded p-8 shadow-lg mb-4">
        <EnergyCalculatorForm />
      </div>
      <div className="text-sm">
        <span className="text-red-500">**</span>LT-A Tariff Customer rates only.
      </div>
    </div>
  );
};

export default BillCalculator;
