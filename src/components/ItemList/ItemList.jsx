import React from 'react';
import Item from '../Item/Item';


const ItemList = ({list}) => {
    return (
        <>
           {list.map(product => <Item key={product.id} properties={product}/> )} 
        </>
    );
};

export default ItemList;