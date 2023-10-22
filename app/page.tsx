import AboutComponent from "@/components/About";
import CustomerOrderInformationCard from "@/components/CustomerOrderInformationCard";
import MyComponent from "@/components/DummyDataFetch";
import FAQAccordion from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";

export default function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  return (
    <div className="flex flex-col space-y-16">
      <HeroSection />
      <AboutComponent />
      <h1 className="heading-text mb-4 !text-center !text-5xl md:mb-8">
        Frequently Asked Questions
      </h1>
      <div className="md:mx-auto md:w-5/6">
        <FAQAccordion></FAQAccordion>
      </div>

      {/* <CustomerOrderInformationCard /> */}
    </div>
  );
}

/*
userName: zubayer
userPass: m7PM%2Flj%2BMYKoUcaydxQQe6Ez6Qal5N5DQAArpAmFcgOn%2BTLK3tN%2BVA%3D%3D
meterNo: 010100000010
customerNo: 3214789
*/

/*
userName=zubayer&userPass=m7PM%2Flj%2BMYKoUcaydxQQe6Ez6Qal5N5DQAArpAmFcgOn%2BTLK3tN%2BVA%3D%3D&meterNo=010100000010&customerNo=3214789*/
