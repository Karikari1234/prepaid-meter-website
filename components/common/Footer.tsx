import Link from "next/link";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <footer className="mt-16 w-full bg-green text-white">
      <div className="px-2 py-6 md:mx-auto  md:w-5/6 md:p-0 md:py-12">
        <div className="md:mb-8 md:grid md:grid-cols-footer">
          <div className="mb-4 flex items-center md:col-span-1 md:min-w-[5rem] md:max-w-[250px] md:flex-col md:items-start">
            <Link
              className="mr-3 block h-16 w-16 md:mb-4 md:h-24 md:w-24"
              href="/"
            >
              <Image
                src="/site-logo.png"
                alt="BPDB logo"
                layout="responsive"
                width={100}
                height={96}
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
          <div className="grid-row-3 mb-4 grid grid-cols-2 justify-between gap-4 md:col-span-4 md:mb-0 md:mt-2 md:grid-cols-4 md:justify-end md:gap-0 md:gap-x-0">
            <div className="">
              <div className="mb-1 font-semibold md:mb-8">Meter Manual</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <a
                    href="https://bpdb.portal.gov.bd/sites/default/files/files/bpdb.portal.gov.bd/page/8d4c02c3_c22c_479d_a287_f3f895d22929/2021-09-20-14-12-3435ce9c9d1d389f5e74b70ce4a7a4fc.pdf"
                    target="_blank"
                    className="text-sm font-light"
                  >
                    Hexing Meter Manual
                  </a>
                </li>
                <li>
                  <a
                    href="https://bpdb.portal.gov.bd/sites/default/files/files/bpdb.portal.gov.bd/page/8d4c02c3_c22c_479d_a287_f3f895d22929/2021-09-20-14-13-8667f356d9c504ccac9aabf6f20b505e.pdf"
                    target="_blank"
                    className="text-sm font-light"
                  >
                    Inhe Meter Manual
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-sm font-light"
                    href="https://bpdb.portal.gov.bd/sites/default/files/files/bpdb.portal.gov.bd/page/8d4c02c3_c22c_479d_a287_f3f895d22929/2021-09-20-14-14-b72bdbea5951d8d2704de5028cecd48e.pdf"
                  >
                    Liyong Meter Manual
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-sm font-light"
                    href="https://bpdb.portal.gov.bd/sites/default/files/files/bpdb.portal.gov.bd/page/8d4c02c3_c22c_479d_a287_f3f895d22929/2021-09-20-14-15-d3e0e6a95820ca5ca971ea6804ed1a21.pdf"
                  >
                    Eastern Meter Manual
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-1 font-semibold md:mb-8">Quicklinks</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <a
                    target="_blank"
                    className="text-sm font-light"
                    href="https://bpdb.portal.gov.bd/sites/default/files/files/bpdb.portal.gov.bd/page/8d4c02c3_c22c_479d_a287_f3f895d22929/2021-09-20-14-11-2d19fa954612b51b3d33dd4b0517f30f.pdf"
                  >
                    System Operations Manual
                  </a>
                </li>
                <li>
                  <Link className="text-sm font-light" href="/bill-calculator">
                    Meter Charge Calculator
                  </Link>
                </li>
                <li>
                  <a className="text-sm font-light" href="path">
                    Meter Short Codes
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
            <div>
              <div className="mb-1 font-semibold md:mb-8">About</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <Link className="text-sm font-light" href="/about">
                    Why Prepaid
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-light" href="path">
                    New Updates
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-light" href="path">
                    Contact Us
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
            <div>
              <div className="mb-1 font-semibold md:mb-8">Help</div>
              <ul className="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <Link className="text-sm font-light" href="path">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    className="text-sm font-light"
                    href="https://www.facebook.com/groups/3715263025180679"
                    target="_blank"
                  >
                    Facebook Group
                  </a>
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
