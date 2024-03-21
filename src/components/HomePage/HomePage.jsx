import { motion } from "framer-motion";
import { Carousel, CarouselCategory, CarouselProduct, HomePageCard } from "../";
import React from "react";

const HomePage = () => {
  document.title = `Amazon.com | Books, Apparels, Electronics & more`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-amazon-background"
    >
      <div className=" max-w-constainer m-auto ">
        <Carousel />
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 -mt-80">
          {/* <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            text={"see terms and conditions"}
          /> */}
          <HomePageCard
            title={"Shop Games"}
            img={"../images/home_grid_2.jpg"}
            text={"Start playing now"}
            link={"336f8ecb-e105-4417-ac3c-d326784788e9"}
          />
          <HomePageCard
            title={"Electronics"}
            img={"../images/home_grid_3.jpg"}
            text={"Find out more"}
            link={"cfa0658e-f9ec-4e47-85d7-5d82de050245"}
          />
          <HomePageCard
            title={"Clothing & more..."}
            img={"../images/home_grid_4.jpg"}
            text={"Browse Kindle Unlimited"}
            link={"6dbfb96f-5e44-41e3-9d4b-1c02fb00bb86"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            text={"See more"}
            link={"40ec8097-e040-4102-a451-92e6e79a6b80"}
          />
          {/* <HomePageCard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            text={"See the deals"}
          /> */}
          <HomePageCard
            title={"Suitcases"}
            img={"../images/home_grid_7.jpg"}
            text={"See more"}
            link={104}
            subcategory={true}
          />
          {/* <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            text={"Learn more"}
          /> */}
          <div className="m-3 pt-8 hidden sm:inline-block xl:hidden">
            <img className="" src="../images/banner_image_2.jpg" />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[100px] md:h-[200px]">
          <img className="h-[100%] m-auto" src="../images/banner_image.jpg" />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
