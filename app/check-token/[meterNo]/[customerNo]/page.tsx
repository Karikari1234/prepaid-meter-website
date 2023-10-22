import { fetchLastThreeTokens } from "@/lib/fetchData";
import { OrderObjectArray } from "@/lib/responseObject/orderObjectArray";

const ResultWithMeterAndCustomerNoPage = async ({
  params,
}: {
  params: { meterNo: string; customerNo: string };
}) => {
  const data: any = await fetchLastThreeTokens(
    params.meterNo,
    params.customerNo,
  );
  console.log(data);
  return data.result ? (
    <pre>{`${JSON.stringify(data.result.orders, null, 2)}`}</pre>
  ) : (
    <div>No Result</div>
  );
};

export default ResultWithMeterAndCustomerNoPage;
