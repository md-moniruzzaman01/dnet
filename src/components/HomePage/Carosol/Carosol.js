
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../../image/banner/Banner-01-t.jpg"
import banner2 from "../../../image/banner/Banner-02.jpg"
import banner3 from "../../../image/banner/Home-Banner-3o.jpg"

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay} from "swiper";

const Carosol = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="banner Image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="banner Image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="banner Image"/>
        </SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Carosol;