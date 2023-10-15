import AboutComponent from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: any) {
  const dict: any = await getDictionary(lang);
  return (
    <div className="flex flex-col space-y-16">
      <HeroSection />
      <AboutComponent />
      {dict.global.language}
    </div>
  );
}
