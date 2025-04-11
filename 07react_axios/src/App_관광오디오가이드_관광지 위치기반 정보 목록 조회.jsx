import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const API_KEY =
    "1C42I%2BvS%2BEOZYNiN75gWOVCBJS9WTLlqh%2B4hyBjlz7njXFfqG%2Fv4qj5j6sA1TaQLjkS0T7qY1H%2BDFEUSTxiTJw%3D%3D";

  // const API_URL = "https://jsonplaceholder.typicode.com/users";

  // const keyword = "서울빛초롱축제";
  const title = "사랑";
  const pageNo = 1;
  const numOfRows = 30;
  const areaCode = ""; // 지역코드(시도코드)
  const sigunguCode = ""; //시군구코드
  const contentTypeId = ""; //관광타입
  const cat1 = "B02"; //대분류
  const cat2 = "B0201"; //중분류
  const cat3 = "B02011000"; //소분류
  const langCode = "ko"; //언어코드
  const mapX = "127.12286";
  const mapY = "37.522184";
  const radius = "1000";

  // const API_URL = `http://apis.data.go.kr/B551011/Odii/themeBasedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&pageNo=${pageNo}&numOfRows=${numOfRows}&langCode=ko&_type=json`;
  const API_URL = `http://apis.data.go.kr/B551011/Odii/themeLocationBasedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&mapX=${mapX}&mapY=${mapY}&radius=${radius}&langCode=${langCode}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;

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
                    <td>{item.themeCategory}</td>
                    <td>{item.title}</td>
                    <td>{item.addr1}</td>
                    <td>{item.addr2}</td>
                    <td>{item.mapX}</td>
                    <td>{item.mapY}</td>
                    <td>{item.createdtime}</td>
                    <td>{item.modifiedtime}</td>
                    <td>{item.langCode}</td>
                    <td>{item.langCheck}</td>
                    <td>{item.tid}</td>
                    <td>{item.tlid}</td>
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
