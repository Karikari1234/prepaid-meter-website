"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props {
  openNav: boolean;
  onOpenNavChange: (openNav: boolean) => void;
}

function NavList(props: Props) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li
        className="text-center text-black"
        onClick={() => props.onOpenNavChange(!props.openNav)}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className="text-center text-black"
        onClick={() => props.onOpenNavChange(!props.openNav)}
      >
        <Link href="/about">About</Link>
      </li>
      <li
        className="text-center text-black"
        onClick={() => props.onOpenNavChange(!props.openNav)}
      >
        <a target="_blank" href="http://180.211.137.8/">
          BPDB Issue Tracking
        </a>
      </li>
      <li
        className="text-center text-black"
        onClick={() => props.onOpenNavChange(!props.openNav)}
      >
        <Link href="/bill-calculator">Calculate Meter Charges</Link>
      </li>
      <li
        className="text-center text-black"
        onClick={() => props.onOpenNavChange(!props.openNav)}
      >
        <Link href="/check-token">Check Meter Token</Link>
      </li>
      <li
        className="text-center text-black"
        onClick={() => props.onOpenNavChange(!props.openNav)}
      >
        <Link href="/faq">FAQ</Link>
      </li>
    </ul>
  );
}

export function MobileNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto mb-4 max-w-full rounded px-6 py-3">
      <div className="text-blue-gray-900 flex items-center justify-between">
        <div className="flex items-center">
          <Link className="mr-3 block h-12 w-12 md:h-16 md:w-16" href="/">
            <Image
              src="/site-logo.png"
              alt="BPDB logo"
              layout="responsive"
              width={25}
              height={25}
            ></Image>
          </Link>
          <div className="text-md font-bold md:text-3xl">
            Prepaid Metering System BPDB
          </div>
        </div>
        <div className="hidden lg:block">
          <NavList
            openNav={openNav}
            onOpenNavChange={(newOpenNav: boolean) => setOpenNav(newOpenNav)}
          />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList
          openNav={openNav}
          onOpenNavChange={(
            newOpenNav: boolean | ((prevState: boolean) => boolean),
          ) => setOpenNav(newOpenNav)}
        />
      </Collapse>
    </Navbar>
  );
}
