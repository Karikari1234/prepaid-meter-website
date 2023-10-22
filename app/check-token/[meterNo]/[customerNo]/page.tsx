const ResultWithMeterAndCustomerNoPage = ({
  params,
}: {
  params: { meterNo: string; customerNo: string };
}) => {
  return <div>{`${params.meterNo} ${params.customerNo}`}</div>;
};

export default ResultWithMeterAndCustomerNoPage;
