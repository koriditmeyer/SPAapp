import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemDetailInfo, ItemCount } from "..";
import { FR_CURRENCY } from "../../constants";

const ItemDetail = ({ properties }) => {
  document.title = `Amazon.com : ${properties.title}`;
  const [quantity, setQuanity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (id, quantity) => {
    setQuanity(quantity);
    addToCart(properties, quantity);
  };
  return (
    <article className="bg-amazon-background h-screen ">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-10 gap-2">
          {/* LEFT */}
          <div className="col-span-3 p-8 bg-white m-auto">
            <img className="" src={properties.img}></img>
          </div>
          {/* MIDDLE */}
          <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
            <div className="mb-3">
              <ItemDetailInfo product={properties} ratings={true} />
            </div>
            <div className="text-base xl:text-lg mt-3">
              {properties.description}
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-span-2 p-4 rounded bg-white">
            <div className="text-xl xl:text-2xl text-black-700 text-right font-semibold">
              {properties.oldPrice ? (
                <span className="text-red-700 mr-2">
                  {Math.round(
                    ((properties.price - properties.oldPrice) /
                      properties.oldPrice) *
                      100
                  )}
                  %
                </span>
              ) : (
                ""
              )}
              {FR_CURRENCY.format(properties.price)}
            </div>
            <div className="text-base xl:text-lg text-gray-500 text-right  marker:font-semibold">
              List Price:{" "}
              <span className="line-through">
                {FR_CURRENCY.format(properties.oldPrice)}
              </span>
            </div>
            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
              FREE Returns
            </div>
            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
              FREE Delivery
            </div>
            <div className="text-base xl:text-lg text-green-700  font-semibold mt-1">
              {properties.stock === 0 ? <span className=" text-amazon-yellow_dark">Out of Stock</span> : "In Stock"}
              {properties.stock !== 0 && <span> ({properties.stock})</span>}
            </div>
            <div className="text-base xl:text-lg mt-1 "></div>
            {properties.stock !== 0 &&
              (quantity == 0 ? (
                <ItemCount
                  id={properties.id}
                  min={1}
                  initial={1}
                  stock={properties.stock}
                  onAdd={onAdd}
                  updateBehaviour={false}
                />
              ) : (
                <Link to={"/SPAapp/cart"}>
                  <button className="btn">Go to Cart</button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
