import CustomerStats from "@/components/CustomerStats";
import AboutComponent from "../../components/About";
import ZonePercentageTable from "@/components/ZonePercentageTable";
import BPDBAdvantagesAndRelatedComponent from "@/components/BPDBAdvantagesAndRelatedComponent";
import PrepaidMeterCharges from "@/components/VendingScenarios";

const About = () => {
  return (
    <div className="space-y-8">
      <BPDBAdvantagesAndRelatedComponent />
      <PrepaidMeterCharges />
      <CustomerStats />
      <ZonePercentageTable />
      <AboutComponent />
    </div>
  );
};

export default About;
