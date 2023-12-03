import CustomerInfoTable from "@/components/CustomerInformationTable";
import TokenInfoTable from "@/components/TokenInformationTable";
import TokenTable from "@/components/TokenTable";
import { dummyOrders } from "@/lib/example-data";
import { fetchCustomerData, fetchLastThreeTokens } from "@/lib/fetchData";
import { CustomerInformation } from "@/lib/responseObject/customerInformation";
import {
  OrderObjectArray,
  Orders,
} from "@/lib/responseObject/orderObjectArray";

const ResultWithOnlyMeterNoPage = async ({
  params,
}: {
  params: { meterNo: string };
}) => {
  let orderData: any = await fetchLastThreeTokens(params.meterNo);
  const customerData = await fetchCustomerData(params.meterNo);
  //const x = data as OrderObjectArray;
  //console.log(data);
  //console.log(data);

  const newOrderArray: Orders = dummyOrders as Orders;
  //console.log(newOrderArray.order[0].customerNo);

  return orderData?.result !== undefined &&
    customerData?.result !== undefined ? (
    <div className="space-y-8">
      <h2 className="heading-text mb-4 !text-center !text-2xl md:mb-8">
        Customer Information
      </h2>
      <CustomerInfoTable customer={customerData} />
      <h2 className="heading-text mb-4 !text-center !text-2xl md:mb-8">
        Last 3 Recharge Token Information
      </h2>
      <TokenInfoTable tokens={orderData.result} />

      {/* <div>
        <pre>{`${JSON.stringify(orderData.result.orders, null, 2)}`}</pre>
      </div>
      <div>
        <pre>{`${JSON.stringify(customerData.result, null, 2)}`}</pre>
      </div> */}
    </div>
  ) : orderData?.res?.statusCode != 500 ? (
    <div className="mb-96">No results found.</div>
  ) : (
    <div className="mb-96">An server error occured. Please try later.</div>
  );
};

export default ResultWithOnlyMeterNoPage;
