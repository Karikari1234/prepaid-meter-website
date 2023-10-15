"use client";

import CustomerStats from "@/components/CustomerStats";
import AboutComponent from "../../../components/About";

const About = () => {
  return (
    <div className="space-y-8">
      <AboutComponent />
      <CustomerStats />
    </div>
  );
};

export default About;
