import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green text-white absolute bottom-0 w-full">
      <div className="p-4 py-6 lg:py-8">
        <div>
          <div className="flex-col justify-center">
            <Link href="/">
              <Image
                src="/site-logo.png"
                alt="BPDB logo"
                width={100}
                height={100}
              ></Image>
            </Link>
            <div className="text-sm font-extralight">
              Prepaid Metering System has been a revolution for improving the
              power sector in Bangladesh. BPDB, with its aim to empower people
              with quality electricity, aims for 100% prepaid metering in near
              future.
            </div>
          </div>
          <div></div>
        </div>
        <div className="text-xs">Built by BPDB. &copy; Copyright 2023.</div>
      </div>
    </footer>
  );
};

export default Footer;
