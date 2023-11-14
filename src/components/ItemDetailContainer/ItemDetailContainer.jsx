import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const  {id} = useParams(); // use to receive route params
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          console.log(!Object.keys(data).length)
          if (!Object.keys(data).length) {
            throw new Error("Empty json");
          }
          setProduct(data);
        } catch (error) {
          console.log(`${error.message} Product not found`);
        }
      };
  
      fetchProduct();
    }, [id]); // add also this to use route params
  
    return (
      <section className="">
        {product ? <ItemDetail properties={product}/> : (
          <p className="">Loading</p>
        )}
      </section>
    );
  };
  

export default ItemDetailContainer;