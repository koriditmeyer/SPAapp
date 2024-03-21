import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper core and required modules
import { Pagination, Navigation, Autoplay, Zoom } from "swiper/modules";

const ImageSlider = ({ images }) => {
  const [swiper, setSwiper] = useState(null);
//  console.log(images)
  const cardslideStop = () => {
    swiper?.autoplay?.stop();
  };
  
  const cardslideStart = () => {
    swiper?.autoplay?.start();
  };

  return (
    <Swiper
      onSwiper={setSwiper}
      pagination={{
        type: "progressbar",
      }}
      slidesPerView={1}
      spaceBetween={30}
      loop={false}
      modules={[Pagination, Autoplay]}
      // autoplay={{
      //   delay:500
      // }}

      // Add more Swiper configurations as needed
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            className="m-auto max-h-96 "
            alt={`Slide ${index}`}
            loading="lazy"
            onMouseEnter={cardslideStart}
            onMouseLeave={cardslideStop}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
