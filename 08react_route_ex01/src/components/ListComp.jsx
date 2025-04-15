import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import axios from "axios";

function ListComp() {
  let myLang = "KR"; // KR, EN, JP, CN
  let URL_HEAD = "";

  // 최초 로딩 시 언어는 한국어로 설정한다.
  setLanguage();

  function setLanguage() {
    let LANG_KEY = "";
    if (myLang == "KR") {
      LANG_KEY = "KorService1";
    } else if (myLang == "EN") {
      LANG_KEY = "EngService1";
    } else if (myLang == "JP") {
      LANG_KEY = "JpnService1";
    } else if (myLang == "CN") {
      LANG_KEY = "ChsService1";
    } else {
      LANG_KEY = "KorService1";
    }
    URL_HEAD = `http://apis.data.go.kr/B551011/${LANG_KEY}`;
  }

  const API_KEY =
    "1C42I%2BvS%2BEOZYNiN75gWOVCBJS9WTLlqh%2B4hyBjlz7njXFfqG%2Fv4qj5j6sA1TaQLjkS0T7qY1H%2BDFEUSTxiTJw%3D%3D";

  const [myData, setMyData] = useState([]);
  const [totalCount, setTotal] = useState("");

  let currentPage = 1;
  const pageSize = 10;
  // let keyword = "서울빛초롱축제";
  let keyword = "";

  useEffect(() => {
    async function fetchData(page) {
      currentPage = page;

      let API_URI = "";
      if (keyword == null || keyword == "") {
        API_URI = `${URL_HEAD}/areaBasedList1?MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&listYN=Y&arrange=O&_type=json&numOfRows=${pageSize}&pageNo=${page}`;
      } else {
        API_URI = `${URL_HEAD}/searchKeyword1?MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&listYN=Y&arrange=O&areaCode=&sigunguCode=&contentTypeId=&cat1=&cat2=&cat3=&_type=json&keyword=${keyword}&numOfRows=${pageSize}&pageNo=${page}`;
      }

      const res = await axios(API_URI);
      console.log(res);
      setMyData(res.data.response.body.items.item);
      setTotal(res.data.response.body.totalCount);
    }

    fetchData();
  }, []);

  return (
    <>
      <NavComp />
      <div>totalCount : {totalCount}</div>
      <div className="container">
        <ul>
          {myData.map((item) => {
            return (
              <>
                <li>
                  <p>{item.titel}</p>
                  <p>{item.addr1}</p>
                  <p>{item.addr2}</p>
                  <p>{item.mapx}</p>
                  <p>{item.mapy}</p>
                  <img src={item.firstimage} alt="" />
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <FooterComp />
    </>
  );
}

export default ListComp;
