import { fetchCustomerData, fetchLastThreeTokens } from "@/lib/fetchData";
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

  //console.log(data);
  return data?.result !== undefined ? (
    <>
      <div>
        <pre>{`${JSON.stringify(data.result.orders, null, 2)}`}</pre>
      </div>
    </>
  ) : (
    <div className="mb-96">No Results found.</div>
  );
};

export default ResultWithMeterAndCustomerNoPage;
