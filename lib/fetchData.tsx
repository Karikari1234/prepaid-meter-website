// Fetch two API endpoints for GET token and customer data

import axios from "axios";
import { CustomerInformation } from "./responseObject/customerInformation";
import { OrderObjectArray } from "./responseObject/orderObjectArray";
var qs = require("qs");
var convert = require("xml-js");

const fetchCustomerData = async (meterNo: string) => {
  //console.log("I am CALLLLLLLLLLLLEDDD");
  //   let data = qs.stringify(
  //     `<xml meterNo= ${meterNo} userName="zubayer" userPass="m7PM/lj+MYKoUcaydxQQe6Ez6Qal5N5DQAArpAmFcgOn+TLK3tN+VA==" />`,
  //   );
  //let res: CustomerInformation;
  let data = qs.stringify({
    reqXml: `<xml  meterNo="${meterNo}" userName="zubayer" userPass="m7PM/lj+MYKoUcaydxQQe6Ez6Qal5N5DQAArpAmFcgOn+TLK3tN+VA==" />`,
  });

  //console.log(data);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.TEST_API_URL}/prepay/prepay/testCode/customIbcs!getCustomerInfo.do`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: "userName=zubayer",
    },
    data: data,
  };

  try {
    const res = await axios.request(config);
    //console.log(res.data);
    return JSON.parse(
      convert.xml2json(
        res.data
          .replace(/[\n\r]/g, "\\n")
          .replace(/&/g, "&amp;")
          .replace(/-/g, "&#45;"),
        {
          compact: true,
          spaces: 4,
        },
      ),
    ) as CustomerInformation;
  } catch (error) {
    console.log(error);
  }

  //return res;
};

const fetchLastThreeTokens = async (meterNo: string, customerNo?: string) => {
  if (!customerNo) {
    const res: any = await fetchCustomerData(meterNo);
    try {
      customerNo = res.result.customerAccountNo._text;
    } catch (error) {
      console.log(error);
    }
  }
  let data = qs.stringify({
    reqXml: `<xml  meterNo="${meterNo}" customerNo="${customerNo}" userName="zubayer" userPass="m7PM/lj+MYKoUcaydxQQe6Ez6Qal5N5DQAArpAmFcgOn+TLK3tN+VA==" />`,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://180.211.137.7:90/prepay/prepay/testCode/customIbcs!callCenterPrepaidTokenAPI.do",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "userName=zubayer; JSESSIONID=52C574BCC857F3EC71AD25FA02CFBDF2.tomcat7_a",
    },
    data: data,
  };

  try {
    const res = await axios.request(config);
    //console.log(res.data);
    return JSON.parse(
      convert.xml2json(
        res.data
          .replace(/[\n\r]/g, "\\n")
          .replace(/&/g, "&amp;")
          .replace(/-/g, "&#45;"),
        {
          compact: true,
          spaces: 4,
        },
      ),
    ) as OrderObjectArray;
  } catch (error) {
    console.log(error);
  }
};

export { fetchCustomerData, fetchLastThreeTokens };
