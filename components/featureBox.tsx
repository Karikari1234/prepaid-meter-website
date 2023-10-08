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
      <div className="transform scale-75 w-1/2">
        <Image
          src={featureProps.featureSVG}
          height={50}
          width={50}
          layout="responsive"
          alt={featureProps.mainText}
        />
      </div>
      <div className="font-bold text-center text-lg max-w-[70%] min-h-[3rem]">
        {featureProps.mainText}
      </div>
      <div className="text-center text-normal">{featureProps.subText}</div>
    </div>
  );
};

export default FeatureBox;
