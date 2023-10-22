const ResultWithOnlyMeterNoPage = ({
  params,
}: {
  params: { meterNo: string };
}) => {
  return <div>{params.meterNo}</div>;
};

export default ResultWithOnlyMeterNoPage;
