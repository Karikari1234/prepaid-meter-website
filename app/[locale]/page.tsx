import AboutComponent from "@/components/About";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="flex flex-col space-y-16">
      <HeroSection />
      <AboutComponent />
    </div>
  );
}
