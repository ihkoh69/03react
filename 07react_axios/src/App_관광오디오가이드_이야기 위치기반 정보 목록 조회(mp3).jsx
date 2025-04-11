import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const API_KEY =
    "1C42I%2BvS%2BEOZYNiN75gWOVCBJS9WTLlqh%2B4hyBjlz7njXFfqG%2Fv4qj5j6sA1TaQLjkS0T7qY1H%2BDFEUSTxiTJw%3D%3D";

  // const API_URL = "https://jsonplaceholder.typicode.com/users";

  const keyword = "백제";
  const title = "사랑";
  const pageNo = 1;
  const numOfRows = 30;
  const areaCode = ""; // 지역코드(시도코드)
  const sigunguCode = ""; //시군구코드
  const contentTypeId = ""; //관광타입
  const cat1 = "B02"; //대분류
  const cat2 = "B0201"; //중분류
  const cat3 = "B02011000"; //소분류
  const langCode = "jp"; //언어코드
  const mapX = "127.12286";
  const mapY = "37.522184";
  const radius = "1000";
  const tid = "346"; //관광지아이디
  const tlid = "1066"; //	관광지언어아이디
  const stid = ""; // 스토리아이디(관광지 아이디-> 순번?)
  const stlid = ""; // 스토리언어아이디

  // const API_URL = `http://apis.data.go.kr/B551011/Odii/themeSearchList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&keyword=${keyword}&langCode=${langCode}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;
  // const API_URL = `http://apis.data.go.kr/B551011/Odii/storyBasedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&langCode=${langCode}&tid=${tid}&tlid=${tlid}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;
  const API_URL = `http://apis.data.go.kr/B551011/Odii/storyLocationBasedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&mapX=${mapX}&mapY=${mapY}&radius=${radius}&langCode=${langCode}&_type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;

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
                    <td>{item.stid}</td>
                    <td>{item.stlid}</td>
                    <td>
                      {item.audioUrl ? (
                        <a href={item.audioUrl}>mp3</a>
                      ) : (
                        "음원등록오류"
                      )}
                    </td>
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
