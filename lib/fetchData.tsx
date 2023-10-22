// Fetch two API endpoints for GET token and customer data

import axios from "axios";
var qs = require("qs");
var convert = require("xml-js");

const fetchCustomerData = async (meterNo: string) => {
  //console.log("I am CALLLLLLLLLLLLEDDD");
  //   let data = qs.stringify(
  //     `<xml meterNo= ${meterNo} userName="zubayer" userPass="m7PM/lj+MYKoUcaydxQQe6Ez6Qal5N5DQAArpAmFcgOn+TLK3tN+VA==" />`,
  //   );

  let data = await qs.stringify({
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

  axios
    .request(config)
    .then((response: any) => {
      var result = convert.xml2json(
        response.data
          .replace(/[\n\r]/g, "\\n")
          .replace(/&/g, "&amp;")
          .replace(/-/g, "&#45;"),
        {
          compact: true,
          spaces: 4,
        },
      );
      console.log(result);
      //console.log(JSON.stringify(response.data));
    })
    .catch((error: any) => {
      console.log(error);
    });
};

const fetchLastThreeTokens = async (meterNo: string, customerNo: string) => {
  let data = await qs.stringify({
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

  axios
    .request(config)
    .then((response: any) => {
      var result = convert.xml2json(
        response.data
          .replace(/[\n\r]/g, "\\n")
          .replace(/&/g, "&amp;")
          .replace(/-/g, "&#45;"),
        {
          compact: true,
          spaces: 4,
        },
      );
      console.log(result);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export { fetchCustomerData, fetchLastThreeTokens };
