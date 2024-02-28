import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// Import Swiper core and required modules
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

const ImageThumbsGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return images && images.length > 0 ? (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
            swiper:thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper:null
        }}
        // pagination={{ type: "fraction" }}
        modules={[Pagination, Navigation, Thumbs]}
        className="h-96 w-full rounded-lg"
        // Add more Swiper configurations as needed
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={image}
                className="bloack h-full w-full object-cover"
                alt={`Slide ${index}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Thumnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='thumbs mt-3 h-32 w-full rounded-lg'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <button className="flex h-full w-full items-center justify-center">
            <img
              src={image}
              className="block h-full w-full object-cover"
              alt={`Slide ${index}`}
         
            />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : (
    ""
  );
};

export default ImageThumbsGallery;
