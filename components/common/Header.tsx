import Image from "next/legacy/image";
import Link from "next/link";

const Header = () => {
  // const mlocale = useLocale();
  // const t = useTranslations("Header");
  // const router = useRouter();
  // const pathname = usePathname();
  // const changeLocale = () => {
  //   mlocale == "en"
  //     ? router.push(pathname, { locale: "bn" })
  //     : router.push(pathname, { locale: "en" });
  // };
  return (
    <header className="hidden md:mx-auto md:mb-2 md:block md:w-5/6 md:py-6">
      <div className="md:flex md:flex-row md:justify-between md:py-4">
        <div className="md:flex md:items-center">
          <Link className="mr-3 block h-16 w-16 md:h-12 md:w-12" href="/">
            <Image
              src="/site-logo.png"
              alt="BPDB logo"
              layout="responsive"
              width={100}
              height={100}
            ></Image>
          </Link>
          <div className="font-bold md:w-1/2 md:text-base">
            Prepaid Metering System BPDB
          </div>
        </div>
        <div className="md:flex md:flex-row md:items-center md:space-x-4">
          <div className="md:flex md:items-center md:space-x-4">
            <div className="md:flex md:min-w-max md:items-center">
              <Image
                src="/phone-icon.svg"
                width={20}
                height={20}
                alt="phone icon"
              />
              <div className="text-sm">16200</div>
            </div>
          </div>
          <div className="md:mt-2">
            <a
              href="https://www.facebook.com/groups/3715263025180679"
              target="_blank"
              className="md:flex md:min-w-max md:items-center"
            >
              <Image
                src="/facebook-icon.svg"
                width={35}
                height={35}
                alt="facebook icon"
              ></Image>
            </a>
          </div>
          {/* <div>
            <button
              onClick={changeLocale}
              className="rounded border border-green bg-transparent px-4 py-2 text-green hover:border-transparent hover:bg-green hover:text-white"
            >
              {t("lang")}
            </button>
          </div> */}
        </div>
      </div>
      <nav className="bg-green-light md:flex md:items-center md:justify-center">
        <ul className="md:flex md:justify-between md:text-sm md:font-semibold md:text-white">
          <li className="p-2 text-center hover:bg-white hover:text-green-light">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 text-center hover:bg-white hover:text-green-light">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 text-center hover:bg-white hover:text-green-light">
            <a target="_blank" href="http://180.211.137.8/">
              BPDB Issue Tracking
            </a>
          </li>
          <li className="p-2 text-center hover:bg-white hover:text-green-light">
            <Link href="/bill-calculator">Calculate Meter Charges</Link>
          </li>
          <li className="p-2 text-center hover:bg-white hover:text-green-light">
            <Link href="/check-token">Check Meter Token</Link>
          </li>
          <li className="p-2 text-center hover:bg-white hover:text-green-light">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
