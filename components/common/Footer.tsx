import Link from "next/link";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <footer className="bg-green text-white w-full mt-16">
      <div className="px-2 py-6 md:py-12  md:w-5/6 md:mx-auto md:p-0">
        <div className="md:grid md:grid-cols-footer md:mb-8">
          <div className="flex items-center mb-4 md:col-span-1 md:flex-col md:items-start md:min-w-[5rem] md:max-w-[250px]">
            <Link
              className="block w-16 h-16 md:w-24 md:h-24 mr-3 md:mb-4"
              href="/"
            >
              <Image
                src="/site-logo.png"
                alt="BPDB logo"
                layout="responsive"
                width={100}
                height={100}
              ></Image>
            </Link>
            <div className="text-semibold text-lg md:hidden">
              Prepaid Metering System
            </div>
            <div className="hidden text-sm font-light md:block md:leading-7">
              Prepaid Metering System has been a revolution for improving the
              power sector in Bangladesh. BPDB, with its aim to empower people
              with quality electricity, aims for 100% prepaid metering in near
              future.
            </div>
          </div>
          <div className="grid grid-cols-2 grid-row-3 gap-4 justify-between mb-4 md:gap-0 md:mb-0 md:grid-cols-4 md:col-span-4 md:gap-x-0 md:mt-2 md:justify-end">
            <div className="">
              <div className="font-semibold mb-1 md:mb-8">Meter Manual</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <Link className="font-light text-sm" href="path">
                    Hexing Meter Manual
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    Inhe Meter Manual
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    Liyong Meter Manual
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    Eastern Meter Manual
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1 md:mb-8">Quicklinks</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <Link className="font-light text-sm" href="path">
                    System Operations Manual
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    Meter Charges
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    Meter Short Codes
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1 md:mb-8">About</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <Link className="font-light text-sm" href="path">
                    Why Prepaid
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    New Updates
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    Contact Us
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1 md:mb-8">Help</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <Link className="font-light text-sm" href="path">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="font-light text-sm" href="path">
                    Facebook Group
                  </Link>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-xs">Built by BPDB. &copy; Copyright 2023.</div>
      </div>
    </footer>
  );
};

export default Footer;
