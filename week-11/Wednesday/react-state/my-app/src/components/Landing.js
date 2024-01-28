import React, { useState } from 'react';
import Item from './Item';

const Landing = (props) => {

    let newStore = props.storeData
    let hotItem = newStore.find(c => c.hottest === true)
    
    return (
        <div>
            “Welcome, {props.userName}. the hottest item is {hotItem.item} for {hotItem.price} ”
        </div>
    )

}

export default Landing;