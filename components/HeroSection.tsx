import Image from "next/legacy/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div className="lg:grid lg:grid-cols-hero lg:items-center lg:gap-4">
      <div className="lg:order-last">
        <Image
          priority
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
          className={`${poppins.className} mb-5  animate-fade-up text-center text-4xl font-bold leading-normal animate-once md:text-left md:text-6xl md:leading-tight`}
        >
          Welcome to <span className="whitespace-nowrap">Prepaid Metering</span>{" "}
          System BPDB
        </h1>
        <p className="mb-5 animate-fade-up text-center text-xl leading-normal animate-once md:text-left">
          The smart and convenient way to pay for your electricity. With prepaid
          metering, you can monitor your energy consumption, and recharge your
          balance easily.
        </p>
        <div className="flex justify-center gap-1 md:justify-normal md:gap-6">
          <Link
            href="/bill-calculator
          "
          >
            <button className="rounded border border-green bg-green px-4 py-2 text-white shadow-2xl hover:border-transparent hover:bg-green-deep">
              Meter Charges
            </button>
          </Link>
          <Link href="/meter-short-codes">
            <button className="rounded border border-green bg-transparent px-4 py-2 text-green hover:bg-slate-100">
              Meter Short Codes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
