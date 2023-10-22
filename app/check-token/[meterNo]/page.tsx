import { fetchCustomerData, fetchLastThreeTokens } from "@/lib/fetchData";
import { CustomerInformation } from "@/lib/responseObject/customerInformation";
import { OrderObjectArray } from "@/lib/responseObject/orderObjectArray";

const ResultWithOnlyMeterNoPage = async ({
  params,
}: {
  params: { meterNo: string };
}) => {
  let data: any = await fetchLastThreeTokens(params.meterNo);
  const customerData = await fetchCustomerData(params.meterNo);
  //const x = data as OrderObjectArray;
  //console.log(data);
  //console.log(data);

  return data.result && customerData?.result ? (
    <>
      <div>
        <pre>{`${JSON.stringify(data.result.orders, null, 2)}`}</pre>
      </div>
      <div>
        <pre>{`${JSON.stringify(customerData.result, null, 2)}`}</pre>
      </div>
    </>
  ) : (
    <div></div>
  );
};

export default ResultWithOnlyMeterNoPage;
