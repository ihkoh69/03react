import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const API_KEY =
    "1C42I%2BvS%2BEOZYNiN75gWOVCBJS9WTLlqh%2B4hyBjlz7njXFfqG%2Fv4qj5j6sA1TaQLjkS0T7qY1H%2BDFEUSTxiTJw%3D%3D";

  const API_URL = `http://localhost:8081/likes/content/list?userId=1000`;

  const [myData, setData] = useState([]);
  const [totalCount, setTotal] = useState("");

  useEffect(() => {
    async function fetchData() {
      console.log(API_URL);
      const res = await axios(API_URL);
      console.log(res);
      console.log(res.data.items);
      // console.log("totalCount : " + res.data.response.body.totalCount);
      const itemLists = res.data.items;
      setData(itemLists);

      // setTotal(res.data.response.body.totalCount);
      // console.log(totalCount);
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
                    <td>
                      {item.addr}
                    {/* insert into events(content_id, content_type_id, area_code,	sigungu_code,	mapX,	mapY,
	                      start_date,	end_date,	title, addr1,	addr2, description,	
                        firstimage,	firstimage2, cat2, cat3, modifiedtime) 
              values({`'${item.contentid}', 
                        '${item.contenttypeid}',
                        '${item.areacode}',	
                        '${item.sigungucode}',	
                        '${item.mapx}',	
                        '${item.mapy}',
                        '${item.eventstartdate}',	
                        '${item.eventenddate}',	
                        '${item.title}', 
                        '${item.addr1}',	
                        '${item.addr2}', 
                        '',	
                        '${item.firstimage}',	
                        '${item.firstimage2}', 
                        '${item.cat2}', 
                        '${item.cat3}', 
                        '${item.modifiedtime}'`}); */}
                   </td>
                   <td> </td>

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
