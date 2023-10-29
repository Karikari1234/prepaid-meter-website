import CustomerInfoTable from "@/components/CustomerInformationTable";
import TokenTable from "@/components/TokenTable";
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

  return data?.result !== undefined && customerData?.result !== undefined ? (
    <>
      <h2 className="heading-text mb-4 !text-center !text-2xl md:mb-8">
        Customer Information
      </h2>
      <CustomerInfoTable customer={customerData} />
      <TokenTable />
      <div>
        <pre>{`${JSON.stringify(data.result.orders, null, 2)}`}</pre>
      </div>
      <div>
        <pre>{`${JSON.stringify(customerData.result, null, 2)}`}</pre>
      </div>
    </>
  ) : data?.res?.statusCode != 500 ? (
    <div className="mb-96">No Results found.</div>
  ) : (
    <div className="mb-96">An server error occured. Please try later.</div>
  );
};

export default ResultWithOnlyMeterNoPage;
