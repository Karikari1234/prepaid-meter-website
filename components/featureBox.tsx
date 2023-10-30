import Image from "next/legacy/image";

export interface FeatureProps {
  order: number;
  featureSVG: string;
  mainText: string;
  subText: string;
}

const FeatureBox = (featureProps: FeatureProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-1/2 scale-75 transform">
        <Image
          src={featureProps.featureSVG}
          height={50}
          width={50}
          layout="responsive"
          alt={featureProps.mainText}
        />
      </div>
      <div className="min-h-[3rem] max-w-[70%] text-center text-2xl font-bold">
        {featureProps.mainText}
      </div>
      <div className="text-center text-xl">{featureProps.subText}</div>
    </div>
  );
};

export default FeatureBox;
