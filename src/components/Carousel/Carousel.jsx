import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useTailwindBreakpoints from "../../hooks/useTailwindBreakpoints";

const Carousel = () => {
  const breakpoints = useTailwindBreakpoints();
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={false}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay, Zoom]}
        className="h-[50%] w-full"
        breakpoints={{
          [breakpoints.xs]: {
            loop: true,
            autoplay: { delay: 9000, pauseOnMouseEnter: true },
          },
        }}
      >
        <SwiperSlide>
          <div className="h-[600px] w-full ">
            <img
              src={"../images/carousel_1.jpg"}
              className="object-cover h-[80%] md:h-[100%] w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full">
            <img
              src={"../images/carousel_2.jpg"}
              className="object-cover h-[70%] md:h-[100%] w-full "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black block ">
          <video controls muted={true} autoPlay={true} loop={true}  className="object-cover h-[80%] md:h-[100%] w-auto">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" className="h-[80%] md:h-[100%]"/>
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full">
            <img
              src={"../images/carousel_4.jpg"}
              className="object-cover h-[50%] md:h-[100%] w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full">
            <img
              src={"../images/carousel_5.jpg"}
              className="object-cover h-[80%] md:h-[100%] w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900 to-amazon-background" />
    </div>
  );
};

export default Carousel;
