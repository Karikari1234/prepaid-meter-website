import Image from "next/image";
const VendingOptionComponent = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col items-center justify-center space-y-2">
        <h6 className="text-sm">Vending Partners</h6>
        <h1 className="text-2xl font-semibold">
          Multiple digital vending gateways
        </h1>
        <h6 className="text-sm">
          Vending can be done through a number of agents that support meter
          vending.
        </h6>
      </div>
      <div className="grid grid-cols-2  gap-8 md:grid-cols-3 md:grid-rows-3">
        <a
          href="https://www.bkash.com/products-services/electricity-paybill"
          className="relative flex h-16 items-center justify-center"
        >
          <Image
            src="/bkash-logo.png"
            alt="brand logo"
            fill={true}
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a
          href="https://nagad.com.bd/services/?service=bill-pay"
          className="relative flex h-16  items-center justify-center"
        >
          <Image
            src="/nagad-logo.svg"
            alt="brand logo"
            fill={true}
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a
          href="https://www.upaybd.com/products/Pay-Bill"
          className="relative flex h-16  items-center justify-center"
        >
          <Image
            src="/upay-logo.webp"
            alt="brand logo"
            fill={true}
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a href="#" className="relative flex h-16  items-center justify-center">
          <Image
            src="/tap-logo.png"
            alt="brand logo"
            fill={true}
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a href="#" className="relative flex h-16  items-center justify-center">
          <Image
            src="/ssl-logo.png"
            alt="brand logo"
            fill={true}
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a href="#" className="relative flex h-16  items-center justify-center">
          <Image
            src="/robi-logo.png"
            alt="brand logo"
            fill={true}
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a href="" className="hidden md:block"></a>
        <a href="#" className="relative flex h-16  items-center justify-center">
          <Image
            src="/gp-logo.png"
            alt="brand logo"
            fill={true}
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default VendingOptionComponent;
