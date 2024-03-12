import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { ItemDetailInfo, ItemCount, ImageThumbsGallery, ProgressBar } from "..";
import { FR_CURRENCY } from "../../constants";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ItemDetailContainerQuery from "../ItemDetailContainer/ItemDetailContainerLoader";

const ItemDetail = () => {
  const { id: productId } = useParams();

  const { data, isLoading } = ItemDetailContainerQuery(productId);
  const product = data?.payload;
  // console.log(product);

  // const properties = useLoaderData().payload
  useEffect(() => {
    if (product?.title) {
      document.title = `Amazon.com : ${product.title}`;
    }
  }, [product?.title]);

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const onAdd = (id, quantity) => {
    setQuantity(quantity);
    console.log(product, quantity);
    dispatch(addToCart({ properties: product, quantity }));
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-amazon-background min-h-screen "
    >
      <ProgressBar isLoading={isLoading} />
      <div className=" max-w-constainer m-auto md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-1 md:gap-2 ">
          {/* LEFT */}
          <div className="md:col-span-3 p-4 bg-white ">
            {isLoading ? (
              <Skeleton className="h-80" />
            ) : (
              <ImageThumbsGallery images={product?.thumbnail} />
            )}
          </div>
          {/* MIDDLE */}
          <div className="md:col-span-5 p-4 md:rounded bg-white divide-y divide-gray-400">
            <div className="mb-3">
              {
                <ItemDetailInfo
                  product={product}
                  ratings={true}
                  isLoading={isLoading}
                />
              }
            </div>
            <div className="text-base xl:text-lg mt-3">
              {isLoading ? <Skeleton count={5} /> : product?.description}
            </div>
          </div>
          {/* RIGHT */}
          <div className="md:col-span-2 p-4 md:rounded bg-white">
            {isLoading ? (
              <>
                <Skeleton className="w-20 mb-4" />
                <Skeleton count={3} />
              </>
            ) : (
              <>
                <div className="text-xl xl:text-2xl text-black-700 text-right font-semibold">
                  {product?.oldPrice && (
                    <span className="text-red-700 mr-2">
                      {Math.round(
                        ((product.price - product.oldPrice) /
                          product.oldPrice) *
                          100
                      )}
                      %
                    </span>
                  )}
                  {FR_CURRENCY.format(product.price)}
                </div>
                {product.oldPrice && (
                  <div className="text-base xl:text-lg text-gray-500 text-right marker:font-semibold">
                    List Price:{" "}
                    <span className="line-through">
                      {FR_CURRENCY.format(product.oldPrice)}
                    </span>
                  </div>
                )}
                <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                  FREE Returns
                </div>
                <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                  FREE Delivery
                </div>
                <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                  {product.stock === 0
                    ? "Out of Stock"
                    : `In Stock (${product.stock})`}
                </div>
                {product.stock !== 0 && quantity === 0 && (
                  <ItemCount
                    id={product.id}
                    min={1}
                    initial={1}
                    stock={product.stock}
                    onAdd={onAdd}
                    updateBehaviour={false}
                  />
                )}
                {product.stock !== 0 && quantity > 0 && (
                  <Link to={"/cart"}>
                    <button className="btn">Go to Cart</button>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ItemDetail;
