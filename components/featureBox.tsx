import Image from "next/image";

export interface FeatureProps {
  order: number;
  featureSVG: string;
  mainText: string;
  subText: string;
}

const FeatureBox = (featureProps: FeatureProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative transform scale-75 h-28 w-full">
        <Image
          src={featureProps.featureSVG}
          layout="fill"
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
