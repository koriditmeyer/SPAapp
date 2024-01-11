import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import useTailwindBreakpoints from "../../hooks/useTailwindBreakpoints";

const CarouselProduct = () => {
  const breakpoints = useTailwindBreakpoints();

  return (
    <div className=" bg-white m-3">
      <div className="text-2xl font-semibold p-3"> Best Sellers</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          [breakpoints.xs]: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          [breakpoints.sm]: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          [breakpoints.md]: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        className="px-3"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/item/${i}`}>
              <img src={`../images/product_${i}_small.jpg`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900 to-amazon-background" />
    </div>
  );
};

export default CarouselProduct;
