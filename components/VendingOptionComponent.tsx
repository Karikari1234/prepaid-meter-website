import Image from "next/image";
const VendingOptionComponent = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col justify-center space-y-6 md:items-center">
        <h6 className="text-3xl font-semibold md:text-3xl">Vending Partners</h6>
        <h1 className="text-4xl font-semibold md:text-5xl">
          Multiple digital vending gateways
        </h1>
        <h6 className="text-lg md:text-xl">
          Vending can be done through a number of agents.
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
            sizes="(max-width: 768px) 100vw, 33vw"
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
            sizes="(max-width: 768px) 100vw, 33vw"
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
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a href="#" className="relative flex h-16  items-center justify-center">
          <Image
            src="/tap-logo.png"
            alt="brand logo"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a
          href="https://sslcommerz.com/"
          className="relative flex h-16  items-center justify-center"
        >
          <Image
            src="/ssl-logo.png"
            alt="brand logo"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a
          href="https://www.robi.com.bd/en/personal/my-robi-app"
          className="relative flex h-16  items-center justify-center"
        >
          <Image
            src="/robi-logo.png"
            alt="brand logo"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
        <a
          href="https://www.grameenphone.com/bpdb"
          className="relative flex h-16  items-center justify-center md:col-start-2"
        >
          <Image
            src="/gp-logo.png"
            alt="brand logo"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "contain" }}
            className="grayscale transition duration-700 ease-in-out hover:scale-125 hover:grayscale-0"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default VendingOptionComponent;
