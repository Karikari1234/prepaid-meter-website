import { fetchCustomerData } from "@/lib/fetchData";
import { CustomerInformation } from "@/lib/responseObject/customerInformation";
import { OrderObjectArray } from "@/lib/responseObject/orderObjectArray";

const ResultWithOnlyMeterNoPage = async ({
  params,
}: {
  params: { meterNo: string };
}) => {
  let data: any = await fetchCustomerData(params.meterNo);
  //const x = data as OrderObjectArray;
  //console.log(data);
  console.log(data);

  return data.result ? (
    <pre>{`${JSON.stringify(data.result, null, 2)}`}</pre>
  ) : (
    <div></div>
  );
};

export default ResultWithOnlyMeterNoPage;
