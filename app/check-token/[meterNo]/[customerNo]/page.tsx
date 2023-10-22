import { fetchLastThreeTokens } from "@/lib/fetchData";

const ResultWithMeterAndCustomerNoPage = async ({
  params,
}: {
  params: { meterNo: string; customerNo: string };
}) => {
  const data: any = await fetchLastThreeTokens(
    params.meterNo,
    params.customerNo,
  );
  return <div>{data}</div>;
};

export default ResultWithMeterAndCustomerNoPage;
