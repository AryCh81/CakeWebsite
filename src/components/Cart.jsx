import React, { useEffect, useState } from 'react';
import CartCard from './cartcard';
import { useLocation } from 'react-router-dom';
import { set } from 'react-hook-form';
import { copyWithStructuralSharing } from '@reduxjs/toolkit/query';

const Cart = () => {

    //UseLocation Hook
    const location = useLocation();
    const item = location.state;

    console.log(item);

    const [carts, setcarts] = useState([]);

    
    //useeffect to save the info even after reload
    useEffect(() => {
        let cards = localStorage.getItem("cards");
        if (cards) {
            setcarts(JSON.parse(cards))
        }
    }, [])
    
    const saveToLS = (params) => {
        localStorage.setItem("cards", JSON.stringify(carts))
    }
    
    useEffect(() => {
        setcarts([...carts,{...item}]);
        saveToLS();
    }, [])

    console.log("ye hai carts")
    console.log(carts);

    if (!item) {
        return <div className=' text-2xl text-[#392922] text-center m-20 font-bold'>No Item In The Cart</div>;
    }

    return (

        <div className='cart flex justify-center gap-[100px] mt-20 '>
            {/* cards */}
            <div className=' flex flex-col gap-10'>

                {carts.map((cart) => {
                    return (
                        <div  key={cart.id} ><CartCard cakeimg={cart.cake} cakename={cart.name} price={cart.price} /></div>
                        
                    )
                })}

            </div>
            {/* billing */}
            <div className='flex flex-col gap-5 w-[500px] h-[300px] p-8 rounded-2xl bg-yellow-50'>

                <div className=' text-2xl font-bold'>Bill Details:</div>

                <div className='text-xl flex justify-between'>
                    <div>Item Total:</div>
                    <div>{`₹ ${750}`}</div>
                </div>

                <div className='text-xl flex justify-between'>
                    <div>Delivery Fee:</div>
                    <div>{`₹ ${30}`}</div>
                </div>

                <div className='cursor-pointer px-4 text-white text-xl font-bold flex justify-between bg-[#392822] w-[400px] h-10 m-auto rounded-md'>
                    <div >To Pay</div>
                    <div>{`₹ ${750 + 30}`}</div>
                </div>

            </div>


        </div>
    );
}

export default Cart;
