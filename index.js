
var cookie = "WMONID=V68A7zXvK4n; visid_incap_2651221=SZt5skd1SIy+gYroiVUG4p7A6WUAAAAAQUIPAAAAAAAJ31JCh/zEsdvYJ+2K1ZXE; incap_ses_1570_2651221=FqlvVW59HRVinxM1wcLJFdPoY2YAAAAAD4KlZA5TJHAdROOUPdH+yg==; ASOBGSPNSESSIONID=mnD3c8sleQndCUnU8_JtRYdj5AOThzzTEbhf6SBwRhaFjnozQ9bR!1483430407!1429564245; dtPC=-";

checkih().then(checkifget())




async function checkih(){

const req = await fetch("https://biz2.samsungcsportal.com/gspn/operate.do", {
    "headers": {
      "accept": "text/javascript, text/html, application/xml, text/xml, */*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-prototype-version": "1.7.2",
      "x-requested-with": "XMLHttpRequest",
      "cookie": cookie,
      "Referer": "https://biz2.samsungcsportal.com/svctracking/svcorder/ServiceOrderListBatch.jsp?search_status=&searchContent=&menuBlock=&menuUrl=&naviDirValue=",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "cmd=SvcOrderListBatchCmd&objectID=&ascJobNo=&ascCode=&jspName=%2Fsvctracking%2Fsvcorder%2FServiceOrderListBatch.jsp&sSeq=&quickSearchYN=&asc_acctno=0002355819&asc_code=0002355819&cc_code=&status=&reason=&req_date_from1=08.07.2024&req_date_to1=08.06.2024&req_date_from=08.07.2024&req_date_to=08.06.2024&status2=&reason2=&DEALER_JOB_NO=&service_type=IH&model=&serial_no=&imei=&CONSUMER=&aedat_from=&aedat_to=&appt_date_from=&appt_date_to=&engineer=&voc_flag=&b2b_flag=&product=&LOCAL_PRODUCT=&billing_flag=&wty_flag=&wty_type=&OBJECT_ID_FROM=&OBJECT_ID_TO=&post_date_from=&post_date_to=&repair_comp_date_from=&repair_comp_date_to=&CC_APP_DT_FROM=&CC_APP_DT_TO=",
    "method": "POST"
  });

  const res = await req.text();
  console.log(res)

}


async function checkifget(){
await sleep(2000);
console.log("in checkifget")
    while (true)
        {
            try{
    const req = await fetch("https://biz2.samsungcsportal.com/gspn/operate.do", {
        "headers": {
          "accept": "text/javascript, text/html, application/xml, text/xml, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-prototype-version": "1.7.2",
          "x-requested-with": "XMLHttpRequest",
          "cookie": cookie,
          "Referer": "https://biz2.samsungcsportal.com/svctracking/svcorder/BatchJobDisplay.jsp",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "cmd=BatchJobDisplayCmd&sSeq=&gubun=&searchOption=2",
        "method": "POST"
      });

      const res = await req.json();
      console.log(res);
      if (res.svcList[0].batchStatus== "Completed")
        {
            console.log("COmpleted");
            break;
        }
        else{
            console.log("Requesting again..");
            await checkifget();
      await sleep(2000);
        }
    }
    catch(e)
    {
        console.log("in catch >>>", e)
break;
    }
}
     
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }