"use client";
import {
  Order,
  TariffFee,
  Tokens,
} from "@/lib/responseObject/orderObjectArray";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useRouter } from "next/navigation";

interface Props {
  tokens: any;
}

const get_item_name = (a: any, b: any) =>
  a["itemName"]["_text"] > b["itemName"]["_text"] ? 1 : -1;

const TokenInfoTable = (props: Props) => {
  try {
    const { tokens } = props;
    //console.log(props.tokens);
    let tokenInfo: Array<Order> = tokens.orders.order;
    //console.log(tokenInfo);
    const router = useRouter();

    tokenInfo.map((token) => token.tariffFees.tariffFee?.sort(get_item_name));

    return (
      <>
        <div className="md:max-w-5/6 md:mx-auto">
          <Table className="">
            <TableCaption>Last 3 Recharge Token summary.</TableCaption>
            <TableHeader className="">
              <TableRow className="bg-gray-100">
                <TableHead>Date</TableHead>
                <TableHead>Token no.</TableHead>
                <TableHead>Sequence</TableHead>
                <TableHead>Gross Recharge Amount</TableHead>
                {tokenInfo.length > 0 ? (
                  tokenInfo[0].tariffFees.tariffFee?.map(
                    (tariff: TariffFee) => (
                      <TableHead key={tariff.itemName._text}>
                        {tariff.itemName._text}
                      </TableHead>
                    ),
                  )
                ) : (
                  <></>
                )}
                <TableHead>Energy Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tokenInfo.map((token: any) => (
                <TableRow key={`${token.orderNo._text}`}>
                  <TableCell>{token.date._text}</TableCell>
                  <TableCell>{token.tokens._text}</TableCell>
                  <TableCell>{token.sequence._text}</TableCell>
                  <TableCell>{token.grossAmount._text}</TableCell>
                  {token.tariffFees.tariffFee?.map((tariff: TariffFee) => (
                    <TableCell
                      key={`${tariff.chargeDes._text} ${tariff.chargeAmount._text}`}
                    >
                      {tariff.chargeAmount._text}
                    </TableCell>
                  ))}
                  <TableCell>{token.energyCost._text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
  } catch (error) {
    return <div>No tokens found, please contact SND.</div>;
  }
};

export default TokenInfoTable;
