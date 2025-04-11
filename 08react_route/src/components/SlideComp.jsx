import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

function SlideComp() {
  const [myData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(`https://jsonplaceholder.typicode.com/posts`);
      console.log(res.data);
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {myData.map((item) => {
          return <SwiperSlide>{item.body}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default SlideComp;
