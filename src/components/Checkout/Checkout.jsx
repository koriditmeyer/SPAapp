import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { FR_CURRENCY } from "../../constants";
import { CheckoutForm, ItemDetailInfo } from "..";
import ItemCount from "../ItemCount/ItemCount";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const Checkout = () => {
  document.title = "Amazon.com Checkout";

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    confirmationEmail: "",
    address: "",
    city_locality: "",
    postal_code: "",
    country_code: "",
  });

  const onAdd = (id, quantity) => {
    updateCart(id, quantity);
  };

  const [orderId, setOrderId] = useState();
  const { cart, totalPrice, totalQuantity, clearCart, updateCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const validateCheckout = (event) => {
    //Create order in firestore
    const db = getFirestore();
    const order = {
      products: cart.map((cart) => ({
        id: cart.product.id,
        title: cart.product.title,
        price: cart.product.price,
        quantity: cart.quantity,
      })),
      total: totalPrice,
      date: new Date(),
      name: formData.name,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      city_locality: formData.city_locality,
      postal_code: formData.postal_code,
      country_code: formData.country_code,
    };

    //Generate order and reduce stock
    Promise.all(
      order.products.map(async (productOrder) => {
        const response = doc(db, "products", productOrder.id);
        const productDoc = await getDoc(response);
        if (!productDoc.exists()) {
          throw new Error("Product not found");
        }
        const currentStock = productDoc.data().stock;
        // Check that currentStock is a number and greater than or equal to quantity
        if (
          typeof currentStock !== "number" ||
          currentStock < productOrder.quantity
        ) {
          throw new Error("Invalid stock data");
        }
        //reduce stock
        await updateDoc(response, {
          stock: currentStock - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            clearCart();
            // Reset form data after successful order creation
            setFormData({
              name: "",
              lastName: "",
              phone: "",
              email: "",
              confirmationEmail: "",
              address: "",
              city_locality: "",
              postal_code: "",
              country_code: "",
            });
            // Navigate to a success page
            navigate(
              {
                pathname:`/SPAapp/order-complete/${docRef.id}`
              }
              );
          })
          .catch((error) => {
            console.log(`${error.message} - Error while creating order`);
          });
      })
      .catch((error) => {
        console.log(`${error.message} - can not update stock. Try later`);
      });
  };

  return (
    <div className=" ">
      <div className="grid grid-cols-12 place-items-center min-w-[1000px] max-w-[1500px] m-auto bg-amazon-background min-h[60px]">
        <div className="col-span-2"></div>
        <h2 className="col-span-8 text-3xl xl:text-5xl font-semibold py-4 ">
          Checkout (
          <span className=" text-amazon-yellow_dark">{`${totalQuantity} items`}</span>
          )
        </h2>
        <LockClosedIcon className="col-span-2 h-[40px] " />
      </div>

      <div className="min-w-[1000px] max-w-[1500px] m-auto py-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Personal info || Products */}
          <div className="col-span-6 bg-white">
            <div>
              <div className="text-2xl xl:text-3xl m-4">
                1. Insert your data
              </div>
              <CheckoutForm formData={formData} setFormData={setFormData} />
            </div>
            <div>
              <div className="text-2xl xl:text-3xl m-4">
                2. Review items and shipping
              </div>
              {cart.map((item) => {
                return (
                  <div key={item.product.id}>
                    <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                      <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                        <div className="col-span-2">
                          <Link to={`/SPAapp/item/${item.product.id}`}>
                            <img
                              className="p-4 m-auto"
                              src={item.product.img_small}
                              alt="Checkout product"
                            />
                          </Link>
                        </div>
                        <div className="col-span-6">
                          <div className="font-medium text-black mt-2">
                            <Link to={`/SPAapp/item/${item.product.id}`}>
                              <ItemDetailInfo
                                product={item.product}
                                ratings={false}
                              />
                            </Link>
                          </div>
                          <ItemCount
                            id={item.product.id}
                            min={0}
                            initial={item.quantity}
                            stock={item.product.stock}
                            onAdd={onAdd}
                            updateBehaviour={true}
                          />
                        </div>
                      </div>
                      <div className="col-span-2 ">
                        <div className="text-sm xl:text-lg mt-2   text-right">
                          Per product{" "}
                          <span className="text-lg xl:text-xl font-semibold">
                            {FR_CURRENCY.format(item.product.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-xl xl:text-2xl text-right mb-4 mr-4 text-amazon-yellow_dark">
              Payment Total:
              <span className="font-semibold">
                {FR_CURRENCY.format(totalPrice)}
              </span>
            </div>
            {orderId && (
              <div>
                {" "}
                THANK YOU FOR YOUR ORDER. YOUR ORDER NUMBER IS {orderId}{" "}
              </div>
            )}
          </div>
          {/* Checkout */}
          <div className="border col-span-2 bg-white rounded min-h-[250px] p-7 divide-y divide-gray-400">
            <button className="btn" onClick={validateCheckout}>
              Place your order
            </button>
            <div className="text-xs xl:text-sm  mb-2">
              By clicking the “Place your order” button, you place your order
              for the item after agreeing to Amazon.co.jp Terms and Conditions,
              privacy notice and other terms of sales described on our site. For
              prices, please see item’s detail page and here. If you’re paying
              with a card, Amazon may give your personal information related to
              the payment to the card’s issuer. We do so for fraud detection and
              prevention. If the card issuer is outside of Japan, the
              information may be transferred overseas. We can’t identify your
              card issuer in advance. That means you need to check your issuer
              and their location. For details, read Sharing of Customer’s
              Personal Information In Compliance With The Personal Information
              Protection Law.
            </div>
            <div>
              <p className=" text-xl xl:text-2xl ">Order Summary</p>
              <div className=" text-xs xl:text-sm mb-4">
                {cart.map((cartItem) => (
                  <p key={cartItem.product.id}>
                    {cartItem.product.title} x {cartItem.quantity}
                  </p>
                ))}
              </div>
              <p>Total of Products: {totalQuantity}</p>
            </div>
            <div className="text-xl xl:text-2xl text-amazon-yellow_dark">
              Payment Total: {FR_CURRENCY.format(totalPrice)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
