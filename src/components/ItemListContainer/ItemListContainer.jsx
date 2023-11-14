import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response
        if (!id) {
          response = await fetch(
            `https://fakestoreapi.com/products?limit=${limit}`
          );
        } else {
          response = await fetch(
            `https://fakestoreapi.com/products/category/${id}`
          );
        }
          const data = await response.json();
          if (!data.length) {
            throw new Error("Empty json");
          }
          setProducts(data);
      } catch (error) {
        console.log(`${error.message} no products found`);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <main className="bg-black overflow-hidden flex justify-center items-center">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 justify-center">
        {products.length ? (
          <ItemList list={products} />
        ) : (
          <p className="text-white">No hay productos</p>
        )}
      </section>
    </main>
  );
};

export default ItemListContainer;
