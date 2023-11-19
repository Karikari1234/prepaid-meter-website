import CustomerStats from "@/components/CustomerStats";
import AboutComponent from "../../components/About";
import ZonePercentageTable from "@/components/ZonePercentageTable";

const About = () => {
  return (
    <div className="space-y-8">
      <CustomerStats />
      <ZonePercentageTable />
      <AboutComponent />
    </div>
  );
};

export default About;
