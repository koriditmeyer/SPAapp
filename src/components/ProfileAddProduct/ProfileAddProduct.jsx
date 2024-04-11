import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";
import {
  DragAndDropZone,
  EditableField,
  EditablePicture,
  ProgressBar,
  SelectComponent,
} from "..";
import handleFieldUpdate from "../../services/handleFieldUpdate";
import ProfileAccountQuery from "./ProfileAddProductLoader";
import Skeleton from "react-loading-skeleton";
import handlePhotoUpdate from "../../services/handlePhotoUpdate";
import SearchFilterQuery from "../SearchFilter/SearchFilterLoader";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import useAddProductLoader from "./ProfileAddProductLoader";

const ProfileAddProduct = () => {
  document.title = `Amazon.com | Profile | Add Product`;
  // submit function
  const handleAddProduct = useAddProductLoader();
  // Ref for the file input
  const fileInputRef = useRef(null);

  // get category data
  const { data, isLoading, isError } = SearchFilterQuery(false);

  //form inputs
  const [title, setTitle] = useState("");
  const [attribute, setAttribute] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [badge, setBadge] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  //Error fom Messages
  const [errTitle, setErrTitle] = useState("");
  const [errAttribute, setErrAttribute] = useState("");
  const [errDescription, setErrDescription] = useState("");
  const [errBrand, setErrBrand] = useState("");
  const [errCode, setErrCode] = useState("");
  const [errPrice, setErrPrice] = useState("");
  const [errOldPrice, setErrOldPrice] = useState("");
  const [errStock, setErrStock] = useState("");
  const [errSubCategory, setErrSubCategory] = useState("");
  const [errBadge, setErrBadge] = useState("");
  const [errThumbnail, setErrThumbnail] = useState("");
  //Handle Functions
  const handleTitle = (e) => {
    setTitle(e.target.value);
    setErrTitle("");
  };
  const handleAttribute = (e) => {
    setAttribute(e.target.value);
    setErrAttribute("");
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    setErrDescription("");
  };
  const handleBrand = (e) => {
    setBrand(e.target.value);
    setErrBrand("");
  };
  const handleCode = (e) => {
    setCode(e.target.value);
    setErrCode("");
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setErrPrice("");
  };
  const handleOldPrice = (e) => {
    setOldPrice(e.target.value);
    setErrOldPrice("");
  };
  const handleStock = (e) => {
    setStock(e.target.value);
    setErrStock("");
  };
  const handleSubCategory = (id) => {
    setSubCategory(id);
    setErrSubCategory("");
  };
  const handleBadge = (e) => {
    setBadge(e.target.value);
    setErrBadge("");
  };
  const handleThumbnail = (files) => {
    setThumbnail(files);
    setErrThumbnail("");
  };

  // validation
  const stockValidation = (stock) => {
    return stock.match(/^[1-9]\d*$/); // positive int excluding 0
  };

  //submit button action
  const handleAddProductClick = async (e) => {
    e.preventDefault();
    if (!title) {
      setErrTitle("Enter title");
    }
    if (!description) {
      setErrDescription("Enter a description");
    }
    if (!code) {
      setErrCode("Enter a code for the product - must be unique");
    }
    if (!price) {
      setErrPrice("Enter a price");
    }
    if (!stock) {
      setErrStock("Enter a stock");
    } else if (!stockValidation(stock)) {
      setErrStock("Must enter a positive integer");
    }
    if (!subCategory) {
      setErrSubCategory("Choose a Catgory and a Subcategory");
    }

    if (
      title &&
      description &&
      code &&
      price &&
      stock &&
      stockValidation(stock) &&
      category
    ) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("attribute", attribute);
      formData.append("description[description][0]", description);
      formData.append("brand", brand);
      formData.append("code", code);
      formData.append("price", price);
      formData.append("oldPrice", oldPrice);
      formData.append("stock", stock);
      formData.append("category", subCategory);
      formData.append("badge", badge);

      // Append each thumbnail file to formData
      if (thumbnail.length) {
        Array.from(thumbnail).forEach((file, index) => {
          formData.append(`thumbnail`, file); // Adjust the name as per your backend expectations
        });
      }
      // console.log(formData)
      await handleAddProduct({ formData });
      setTitle("");
      setAttribute("");
      setDescription("");
      setBrand("");
      setCode("");
      setPrice("");
      setOldPrice("");
      setStock("");
      setCategory("");
      setSubCategory("");
      setBadge("");
      setThumbnail([]);
      setFileInputKey(Date.now()); // Changes the key, forcing the input to reset
    }
  };

  return (
    <>
      <ProgressBar isLoading={isLoading} />
      <div className="max-w-constainer py-2 px-4 xl:px-2 m-auto">
        <BreadCrumbs />
        <h3 className=" text-2xl font-semibold">Add a Product</h3>
        <div className=" grid grid-cols-1  py-2 gap-4">
          <div className="w-full border rounded-md p-2">
            <form id="addProduct" encType="multipart/form-data">
              <h4 className="text-lg font-bold">Fill the product details</h4>
              <p className="text-xs  text-slate-500">
                Required information with *
              </p>
              <div className="pr-8 pb-4">
                <h5 className="text-sm  font-bold pt-3">Product Title*</h5>
                <input
                  className=" w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="title"
                  value={title}
                  placeholder="Title"
                  onChange={handleTitle}
                  required
                />
                {errTitle && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errTitle}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Code*</h5>
                <input
                  className=" w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="code"
                  value={code}
                  placeholder="code"
                  onChange={handleCode}
                  required
                />
                {errCode && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errCode}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Attribute</h5>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="attribute"
                  value={attribute}
                  placeholder="attribute"
                  onChange={handleAttribute}
                />
                {errAttribute && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errAttribute}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">
                  Product Description*
                </h5>
                <textarea
                  className="resize-y  w-full h-20 py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  autoComplete="description"
                  value={description}
                  placeholder="description"
                  onChange={handleDescription}
                  required
                />
                {errDescription && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errDescription}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Brand</h5>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="brand"
                  value={brand}
                  placeholder="brand"
                  onChange={handleBrand}
                />
                {errBrand && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errBrand}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Price*</h5>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="number"
                  autoComplete="price"
                  value={price}
                  placeholder="price"
                  onChange={handlePrice}
                  required
                />
                {errPrice && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errPrice}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Old Price</h5>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="number"
                  autoComplete="oldPrice"
                  value={oldPrice}
                  placeholder="old price"
                  onChange={handleOldPrice}
                />
                {errOldPrice && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errOldPrice}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Stock*</h5>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="number"
                  autoComplete="stock"
                  value={stock}
                  placeholder="stock"
                  onChange={handleStock}
                  required
                />
                {errStock && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errStock}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Category*</h5>
                <div className=" min-h-[40px] w-full  max-h-24 overflow-hidden overflow-y-scroll  bg-amazon-background rounded-md p-2 flex flex-wrap gap-2 ">
                  {isError && <p>Error</p>}
                  {isLoading ? (
                    <Skeleton className="w-12" />
                  ) : (
                    data?.payload.map((item, index) => (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          setCategory(item);
                          setSubCategory("");
                        }}
                        className={`btn p-2 flex items-center gap-2 w-auto 
              ${item._id != category._id && "bg-orange-100"}`}
                      >
                        <p>{item.name}</p>
                        {item._id === category._id ? (
                          <CheckIcon className="w-4 stroke-lime-600 stroke-2" />
                        ) : (
                          <XMarkIcon className="w-4 stroke-red-600 stroke-2" />
                        )}
                      </motion.button>
                    ))
                  )}
                </div>
                {category && category._id !== "0" && (
                  <>
                    <h5 className="text-sm  font-bold pt-3">
                      Product Subcategory*
                    </h5>
                    <div className="min-h-[40px] w-full  max-h-24 overflow-hidden overflow-y-scroll  bg-amazon-background rounded-md p-2 flex flex-wrap gap-2 ">
                      {category.subcategories?.map((item, index) => (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubCategory(item.id);
                          }}
                          className={`btn p-2 flex items-center gap-2 w-auto 
              ${item.id != subCategory && "bg-orange-100"}`}
                        >
                          <p>{item.name}</p>
                          {item.id === subCategory ? (
                            <CheckIcon className="w-4 stroke-lime-600 stroke-2" />
                          ) : (
                            <XMarkIcon className="w-4 stroke-red-600 stroke-2" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </>
                )}
                {errSubCategory && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errSubCategory}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Badge</h5>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="badge"
                  value={badge}
                  placeholder="badge"
                  onChange={handleBadge}
                />
                {errBadge && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errBadge}
                  </p>
                )}
                <h5 className="text-sm  font-bold pt-3">Product Thumbnails</h5>
                <DragAndDropZone
                  onUpdate={handleThumbnail}
                  fileInputKey={fileInputKey}
                />
                {errThumbnail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errThumbnail}
                  </p>
                )}
              </div>
              <button onClick={handleAddProductClick} className="btn">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAddProduct;
