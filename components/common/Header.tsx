import Image from "next/legacy/image";
import Link from "next/link";
import { CustomMenubar } from "./menubar";
import { CustomNavigationMenu } from "./navigationmenubar";

const Header = () => {
  return (
    <header className="hidden md:block md:w-5/6 md:mx-auto md:py-6">
      <div className="md:flex md:flex-row md:justify-between md:py-4">
        <div className="md:flex md:items-center">
          <Link className="block w-16 h-16 md:w-16 md:h-16 mr-3" href="/">
            <Image
              src="/site-logo.png"
              alt="BPDB logo"
              layout="responsive"
              width={100}
              height={100}
            ></Image>
          </Link>
          <div className="font-bold md:text-3xl md:whitespace-nowrap">
            Prepaid Metering System BPDB
          </div>
        </div>
        <div className="md:flex md:flex-row md:space-x-4 md:basis-48 md:items-center">
          <div className="md:flex md:space-x-4 md:items-center">
            <div className="md:flex md:items-center">
              <Image
                src="/phone-icon.svg"
                width={50}
                height={50}
                alt="phone icon"
              />
              <div>16200</div>
            </div>
          </div>
          <div className="md:mt-2">
            <Image
              src="/facebook-icon.svg"
              width={45}
              height={45}
              alt="facebook icon"
            ></Image>
          </div>
          <div>
            <button className="bg-transparent hover:bg-green text-green hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
              বাংলা
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center bg-green-light md:h-12"></div>
    </header>
  );
};

export default Header;
