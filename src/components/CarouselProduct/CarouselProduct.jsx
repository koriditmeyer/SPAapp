import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link, createSearchParams } from "react-router-dom";
import useTailwindBreakpoints from "../../hooks/useTailwindBreakpoints";
import ItemListContainerQuery from "../ItemListContainer/ItemListContainerLoader";
import Skeleton from "react-loading-skeleton";
import ErrorComponentFlex from "../common/ErrorComponentFlex/ErrorComponentFlex";

const CarouselProduct = () => {
  const maxInputSearchResults = 50;
  const badge = "bestseller";
  const breakpoints = useTailwindBreakpoints();
  const searchParams = createSearchParams({
    limit: `${maxInputSearchResults}`,
    badge: `${badge}`,
  });
  const { data, isLoading, isError, error } = ItemListContainerQuery(searchParams, false);
  // console.log(data);
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
            slidesPerView: 3,
            spaceBetween: 10,
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
        {isError && <div className="h-72 ">
            <ErrorComponentFlex error={error}/>
          </div>}
        {(isLoading) ? (
          <div className="h-72 grid grid-cols-3 sm:grid-cols-5 gap-2 my-4">
            <Skeleton className="h-full col-span-1" />
            <Skeleton className="h-full col-span-1" />
            <Skeleton className="h-full col-span-1" />
          </div>
        ) : (
        data?.payload?.products.map((e, key) => (
          <SwiperSlide key={key} className="p-2  bg-slate-50 ">
              <Link to={`/products/${e._id}`}>
                <img src={e.thumbnail[0]} className="h-72 object-cover" loading="lazy" />
              </Link>
          </SwiperSlide>
        ))
        )}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900 to-amazon-background" />
    </div>
  );
};

export default CarouselProduct;
