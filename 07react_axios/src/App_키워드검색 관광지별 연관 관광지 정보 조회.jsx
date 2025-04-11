import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const API_KEY =
    "1C42I%2BvS%2BEOZYNiN75gWOVCBJS9WTLlqh%2B4hyBjlz7njXFfqG%2Fv4qj5j6sA1TaQLjkS0T7qY1H%2BDFEUSTxiTJw%3D%3D";

  // const API_URL = "https://jsonplaceholder.typicode.com/users";

  const keyword = "경복궁";
  const title = "사랑";
  const pageNo = 1;
  const numOfRows = 1000;
  const areaCode = ""; // 지역코드(시도코드)
  const sigunguCode = ""; //시군구코드

  const areaCd2 = "11"; // 시도코드(연관광과지 조회 시 사용하는 코드체계)
  const signguCd = "11110"; // 시군구코드(연관관광지 조회 시 사용하는 코드체계)
  const baseYm = "202412"; // 기준월

  const contentTypeId = ""; //관광타입
  const cat1 = "B02"; //대분류
  const cat2 = "B0201"; //중분류
  const cat3 = "B02011000"; //소분류
  const langCode = "ko"; //언어코드
  const mapX = "127.12286";
  const mapY = "37.522184";
  const radius = "1000";
  const tid = "346"; //관광지아이디
  const tlid = "1066"; //	관광지언어아이디
  const stid = ""; // 스토리아이디(관광지 아이디-> 순번?)
  const stlid = ""; // 스토리언어아이디

  // const API_URL = `http://apis.data.go.kr/B551011/Odii/storySearchList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&langCode=${langCode}&keyword=${keyword}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;
  // const API_URL = `https://apis.data.go.kr/B551011/GreenTourService1/areaBasedList1?MobileOS=ETC&MobileApp=myAPP&serviceKey=${API_KEY}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;
  // const API_URL = `http://apis.data.go.kr/B551011/TarRlteTarService/areaBasedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&baseYm=${baseYm}&areaCd=${areaCd2}&signguCd=${signguCd}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;
  const API_URL = `http://apis.data.go.kr/B551011/TarRlteTarService/searchKeyword?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&baseYm=${baseYm}&areaCd=${areaCd2}&signguCd=${signguCd}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}&keyword=${keyword}`;

  const [myData, setData] = useState([]);
  const [totalCount, setTotal] = useState("");

  useEffect(() => {
    async function fetchData() {
      console.log(API_URL);
      const res = await axios(API_URL);
      console.log(res);
      console.log(res.data.response.body.items.item);
      console.log("totalCount : " + res.data.response.body.totalCount);
      const itemLists = res.data.response.body.items.item;
      setData(itemLists);
      setTotal(res.data.response.body.totalCount);
      console.log(totalCount);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        totalCount : {totalCount}
        <table>
          <tbody>
            {myData.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.rlteBsicAdres}</td>
                    <td>{item.areaCd}</td>
                    <td>{item.signguCd}</td>
                    <td>{item.tAtsNm}</td>
                    <td>{item.baseYm}</td>

                    <td>{item.rlteCtgryLclsNm}</td>
                    <td>{item.rlteCtgryMclsNm}</td>
                    <td>{item.rlteCtgrySclsNm}</td>
                    <td>{item.rlteTatsNm}</td>
                    <td>{item.rlteRank}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
