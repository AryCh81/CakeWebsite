import React, { useState } from 'react';
import CakeCard from './CakeCard';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [cards, setcards] = useState([

        { id: 1, cake: "/svgs/cake1.svg", name: "Butter Scotch cake", price: "200" },
        { id: 2, cake: "/svgs/cake2.svg", name: "Choco Lava cake", price: "300" },
        { id: 3, cake: "/svgs/cake3.svg", name: "Dark Chocolate cake", price: "250" },
        { id: 4, cake: "/svgs/cake2.svg", name: "Chocolate Caramel cake", price: "300" },

    ]);

    return (
        <div className='container bg-[url("/images/homeimg.png")] bg-no-repeat w-[120vw] min-h-screen pb-16' >

            {/* heading */}


            <div className='flex gap-[300px] text-white mx-[140px]'>

                <div className=' flex flex-col gap-4 mt-12'>
                    <div className=' text-5xl font-bold'>Every Cake now at </div>
                    <div className=' text-5xl font-bold'>your Bhawan Gate !</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</div>
                </div>

                <div ><img width={230} height={230} src="/svgs/cakelogo.svg" alt="img" /></div>

            </div>


            {/* gpl special */}
            <div className=' text-amber-950 text-4xl font-bold font-serif text-center mt-16 mb-10'>GPL Specials</div>

            {/* cake card */}
            <div className='flex overflow-x-auto cakecards gap-10 justify-evenly ml-10' >

                {cards.map((item) => {
                    return (
                    
                            <CakeCard keys={item.id} state={item} cake={item.cake} name={item.name} price={item.price}/>
                    )
                })
                }

            </div>

            {/* Chocolate cakes */}
            <div className=' text-amber-950 text-4xl font-bold font-serif text-center mt-16 mb-10'>Chocolate Cakes</div>

            <div className='flex overflow-x-auto cakecards gap-10 justify-evenly ml-10' >

                <CakeCard cake={"/svgs/cake2.svg"} name={"Chocolate Caramel Cake"} price={"₹300"} />
                <CakeCard cake={"/svgs/cake2.svg"} name={"Chocolate Caramel Cake"} price={"₹300"} />
                <CakeCard cake={"/svgs/cake2.svg"} name={"Chocolate Caramel Cake"} price={"₹300"} />
                <CakeCard cake={"/svgs/cake2.svg"} name={"Chocolate Caramel Cake"} price={"₹300"} />

            </div>
            {/* Vanilla Cakes  */}
            <div className=' text-amber-950 text-4xl font-bold font-serif text-center mt-16 mb-10'>Vanilla Cakes</div>

            <div className='flex overflow-x-auto cakecards gap-10 justify-evenly ml-10' >

                <CakeCard cake={"/svgs/cake1.svg"} name={"Vanilla Cake"} price={"₹200"} />
                <CakeCard cake={"/svgs/cake1.svg"} name={"Vanilla Cake"} price={"₹200"} />
                <CakeCard cake={"/svgs/cake1.svg"} name={"Vanilla Cake"} price={"₹200"} />
                <CakeCard cake={"/svgs/cake1.svg"} name={"Vanilla Cake"} price={"₹200"} />

            </div>


        </div>
    );
}

export default Home;
