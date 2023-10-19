import AboutComponent from "@/components/About";
import CustomerOrderInformationCard from "@/components/CustomerOrderInformationCard";
import MyComponent from "@/components/DummyDataFetch";
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
      {/* <CustomerOrderInformationCard /> */}
      <MyComponent>
        <CustomerOrderInformationCard x={searchParams} />
      </MyComponent>
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
