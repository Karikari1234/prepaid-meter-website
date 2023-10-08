import Image from "next/legacy/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div className="lg:grid lg:gap-4 lg:grid-cols-hero lg:items-center">
      <div className="lg:order-last">
        <Image
          className=""
          src="/hero-image.png"
          alt="BPDB logo"
          layout="responsive"
          width={400}
          height={400}
        ></Image>
      </div>
      <div className="">
        <h1
          className={`${poppins.className}  font-bold  text-4xl text-center leading-normal mb-5 md:text-6xl md:text-left md:leading-tight animate-fade-up animate-once`}
        >
          Welcome to <span className="whitespace-nowrap">Prepaid Metering</span>{" "}
          System BPDB
        </h1>
        <p className="text-center leading-normal text-xl mb-5 md:text-left animate-fade-up animate-once">
          The smart and convenient way to pay for your electricity. With prepaid
          metering, you can monitor your energy consumption, and recharge your
          balance easily.
        </p>
        <div className="flex gap-1 justify-center md:justify-normal md:gap-6">
          <Link href="/">
            <button className="bg-green border border-green hover:border-transparent hover:bg-green-deep text-white py-2 px-4 rounded">
              Meter Charges
            </button>
          </Link>
          <Link href="/path">
            <button className="bg-transparent hover:bg-green text-green hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
              Meter Short Codes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
