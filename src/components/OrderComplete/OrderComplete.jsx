import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const OrderComplete = () => {
  const { orderId } = useParams();
  const [loading, setLoading] = useState(true);
  const [order, setOrders] = useState([]);

  useEffect(() => {
    document.title = `Amazon.com : Comfirmation Order ${orderId} `;
    setLoading(true); // Need to set again to true at it can change over time
    const response = doc(db, "orders", orderId);
    getDoc(response)
      .then((snapshot) => {
        if (snapshot.empty) {
          throw new Error("No results");
        }
        setOrders({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => {
        console.log(`${error.message} - no products found`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  return (
    <div>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <>
          <h1>Order Complete</h1>
          <p>Your order ID is: {orderId}</p>
           {/* <ItemDetail properties={order} /> */}
        </>
      )}
    </div>
  );
};

export default OrderComplete;
