import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate, createSearchParams } from "react-router-dom";
import useTailwindBreakpoints from "../../hooks/useTailwindBreakpoints";
import SearchFilterQuery from "../SearchFilter/SearchFilterLoader";
import SearchCategoryFilterQuery from "../SearchFilter/SearchCategoryFilterLoader";
import Skeleton from "react-loading-skeleton";
import ErrorComponentFlex from "../common/ErrorComponentFlex/ErrorComponentFlex";

const CarouselCategory = () => {
  const navigate = useNavigate();
  const breakpoints = useTailwindBreakpoints();

  //******* GET DATA OF CATEGORIES */
  // get data
  const { data, isLoading } = SearchFilterQuery(false);
  //  console.log(data)
  // get categories unique
  const { data: dataCategory, isLoading: isLoadingDataCategory, isError, error } =
    SearchCategoryFilterQuery(null, false);

  // Iterate over each item in `dataCategory`
  let results = [];
  dataCategory?.payload?.forEach((item) => {
    // Find the parent category for the current item's category
    const parentCategory = data?.payload.find((category) =>
      category.subcategories?.some(
        (subcategory) => subcategory.id === item.category
      )
    );
    // If a parent category is found, log the name of the parent category and the count
    if (parentCategory) {
      let result = { category: parentCategory._id, count: item.count };
      results.push(result);
    }
  });
  let categoryCounts = results?.reduce((acc, { category, count }) => {
    acc[category] = (acc[category] || 0) + count;
    return acc;
  }, {});
  // Convert the resulting object back into an array
  const reducedData = Object.entries(categoryCounts).map(
    ([category, count]) => ({
      category,
      count,
    })
  );
  //************************* */

  const searchCategory = (category) => {
    navigate({
      pathname: "/search",
      search: `${createSearchParams({
        category: `${category}`
      })}`,
    });
  };

  return (
    <div className=" bg-white m-3">
      <div className="text-2xl font-semibold p-3"> Shop by Category</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={true}
        centerInsufficientSlides={true}
        watchOverflow={true}
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="px-3"
      >
        {isError && <div className="h-56 ">
            <ErrorComponentFlex error={error}/>
          </div>}
        {(isLoading || isLoadingDataCategory) ? (
          <div className="h-56 grid grid-cols-3 sm:grid-cols-5 gap-2 my-4">
            <Skeleton className="h-full col-span-1" />
            <Skeleton className="h-full col-span-1" />
            <Skeleton className="h-full col-span-1" />
          </div>
        ) : (
          data?.payload.map(
            (item, index) =>
              reducedData?.some((c) => c.category == item._id) && (
                <SwiperSlide
                  onClick={() => searchCategory(item._id)}
                  key={index}
                  className="cursor-pointer"
                >
                  <div className="  flex flex-col items-center text-center p-2 font-medium">
                    <img 
                    src={item.thumbnail} 
                    className="h-56 object-cover scale-125 filter grayscale-[70%]"
                    />
                    <p>{item.name}</p>
                    <p className="  bg-amazon-yellow text-white px-1">
                      {reducedData?.find((c) => c.category == item._id)?.count}{" "}
                      Products
                    </p>
                  </div>
                </SwiperSlide>
              )
          )
        )}

        {/* <SwiperSlide
            onClick={() => searchCategory("Deals")}
            className="cursor-pointer"
          >
            <img src={"../images/category_0.jpg"} />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => searchCategory("Amazon")}
            className="cursor-pointer"
          >
            <img src={"../images/category_1.jpg"} />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => searchCategory("Books")}
            className="cursor-pointer"
          >
            <img src={"../images/category_2.jpg"} />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => searchCategory("Computers")}
            className="cursor-pointer"
          >
            <img src={"../images/category_3.jpg"} />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => searchCategory("Home")}
            className="cursor-pointer"
          >
            <img src={"../images/category_4.jpg"} />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => searchCategory("Mobiles")}
            className="cursor-pointer"
          >
            <img src={"../images/category_5.jpg"} />
          </SwiperSlide> */}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900 to-amazon-background" />
    </div>
  );
};

export default CarouselCategory;
