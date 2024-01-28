import React, { useState } from 'react';

const Item = ({ item, onDiscount }) => {
   
    const activatation = (onDiscount) => {
        let optionA = item.price*(1-item.discount)
        let optionb = item.price
        return(
            onDiscount ? optionA : optionb
        )
    }
    
    return (
        <div> 
            {item.item}: {activatation(onDiscount)}$   
        </div>
      );
}


export default Item;