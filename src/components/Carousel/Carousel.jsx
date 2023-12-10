import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
      <div className="h-[600px] bg-white">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 9000 , pauseOnMouseEnter:true}}
          
          className="h-[50%]"
        >
          <SwiperSlide>
            <img src={"../images/carousel_1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../images/carousel_2.jpg"} />
          </SwiperSlide>
          <SwiperSlide className="bg-black block h-auto">
            <video controls muted={true} autoPlay={true} loop={true}>
              <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../images/carousel_4.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../images/carousel_5.jpg"} />
          </SwiperSlide>
        </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-stone-900 to-amazon-background" />
      </div>
  );
};

export default Carousel;
