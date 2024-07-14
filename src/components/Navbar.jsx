import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' bg-[#392922] py-3 flex gap-10 font-sans text-white'>

            <div className='mr-[40vw] ml-[12vw]'>
                <div className=' text-2xl font-medium'>CakeOP</div>
            </div>

            <NavLink to="/">    <div className='flex gap-2 cursor-pointer'>
                <div><img width={20} height={20} src="/svgs/home.svg" alt="img" /></div>
                <div>Home</div>
            </div></NavLink>

            <NavLink to="/cart">    <div className='flex gap-2 cursor-pointer'>
                <div><img width={20} height={20} src="/svgs/cart.svg" alt="img" /></div>
                <div>Cart</div>
            </div></NavLink>

            <div className='flex gap-2 cursor-pointer'>
                <div><img width={20} height={20} src="/svgs/favourite.svg" alt="img" /></div>
                <div>Favourite</div>
            </div>

            <div className='flex gap-2 cursor-pointer'>
                <div><img width={18} height={18} src="/svgs/account.svg" alt="img" /></div>
                <div>My Account</div>
            </div>

        </div>
    );
}

export default Navbar;
