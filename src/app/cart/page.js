"use client";
import React from "react";
import { remove } from "@/Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';


const Cartpage = () => {
  const dispath = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const handleRemove = (item) => {
    dispath(remove(item));
  };

  return (
    <div>
      <h3>Cart page</h3>
      <div className="cartWrapper">
        {cartItem.map((item) => (
          <div  key={item.id} className="cartCard">
            <Image src={item.image} alt="img" width={80} height={80}/>
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartpage;
