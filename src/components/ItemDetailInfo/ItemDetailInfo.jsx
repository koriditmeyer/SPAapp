import React from 'react';
import { ItemBadge, ItemRating } from '..';

const ItemDetailInfo = ({product, ratings}) => {
    return (
        <div className='mb-1'>
            <div className='text-xl xl:text-2xl font-medium mb-1 hover:text-amazon-yellow_dark'>{product.title}</div>
            <div className='text-sm xl:text-base  mb-1' >by <span className='text-blue-500'>{product.brand}</span></div>
            {
             ratings &&
            <div className='text-sm xl:text-base font-medium mb-1'><ItemRating avgRating={product.avgRating} ratings={product.ratings} /></div>
            }
            <div className='text-sm xl:text-base  mb-1'>{product.attribute}</div>
            <div><ItemBadge badge={product.badge}/></div>
            
        </div>
    );
};

export default ItemDetailInfo;