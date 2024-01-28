import React, { useState } from 'react';
import Item from './Item';

const Home = ({props}) => {

    return (
        <>
        {props.store.map((data,index) => <Item item={data} onDiscount={props.shouldDiscount} key={index}></Item>)}
        </>
    )
}


export default Home;