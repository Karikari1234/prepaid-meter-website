import { Order } from "@/lib/responseObject/orderObjectArray";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Props {
  tokens: any;
}
const TokenInfoTable = (props: Props) => {
  const { tokens } = props;
  const tokenInfo: Array<Order> = tokens.order;

  return (
    <>
      <div className="md:max-w-5/6 md:mx-auto">
        <Table className="">
          <TableCaption>Last Tokens summary.</TableCaption>
          <TableHeader className="">
            <TableRow className="bg-gray-100">
              <TableHead>Date</TableHead>
              <TableHead>Token no.</TableHead>
              <TableHead>Sequence</TableHead>
              <TableHead>Order no.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokenInfo.map((token: any) => (
              <TableRow key={token.orderNo._text}>
                <TableCell>{token.date._text}</TableCell>
                <TableCell>{token.tokens._text}</TableCell>
                <TableCell>{token.sequence._text}</TableCell>
                <TableCell>{token.orderNo._text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TokenInfoTable;
