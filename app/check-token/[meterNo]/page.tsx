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
    <div>{`${data.result._attributes.message}`}</div>
  ) : (
    <div></div>
  );
};

export default ResultWithOnlyMeterNoPage;
