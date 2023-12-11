import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate, createSearchParams } from "react-router-dom";

const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "/search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  return (
    <div className=" bg-white m-3">
      <div className="text-2xl font-semibold p-3"> Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide onClick={()=> searchCategory("Deals")} className="cursor-pointer">
          <img src={"../images/category_0.jpg"} />
        </SwiperSlide>
        <SwiperSlide onClick={()=> searchCategory("Amazon")} className="cursor-pointer">
          <img src={"../images/category_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide onClick={()=> searchCategory("Books")} className="cursor-pointer">
          <img src={"../images/category_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide onClick={()=> searchCategory("Computers")} className="cursor-pointer">
          <img src={"../images/category_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide onClick={()=> searchCategory("Home")} className="cursor-pointer">
          <img src={"../images/category_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide onClick={()=> searchCategory("Mobiles")} className="cursor-pointer">
          <img src={"../images/category_5.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900 to-amazon-background" />
    </div>
  );
};

export default CarouselCategory;
