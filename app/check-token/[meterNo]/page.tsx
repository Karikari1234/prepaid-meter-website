import { fetchCustomerData } from "@/lib/fetchData";

const ResultWithOnlyMeterNoPage = async ({
  params,
}: {
  params: { meterNo: string };
}) => {
  const data: any = await fetchCustomerData(params.meterNo);
  return <div>{data}</div>;
};

export default ResultWithOnlyMeterNoPage;
