import React, { useState } from 'react';


const cartcard = (prop) => {

    const [count, setcount] = useState(1);

    return (
        <div className='flex gap-1 w-[500px] h-[120px] bg-yellow-50 rounded-xl px-4'>

            <div className=' flex flex-col gap-1 text-white text-xl my-6 cursor-pointer'>
                <div className='w-8 h-8 rounded-md bg-[#392922] text-center'><button onClick={() => { setcount(count + 1) }}> + </button></div>
                <div className='w-8 h-8 rounded-md bg-[#392922] text-center'><button onClick={() => { setcount(count -1) }}> - </button></div>
            </div>

            <div className=' mt-2 mx-3'><img width={110} height={110} src={prop.cakeimg} alt="" /></div>

            <div className=' w-[250px] mt-3'>
                <div className='text-xl font-bold'>{prop.cakename}</div>
                <div className=' flex justify-between'>
                    <div>{`${count} pc`}</div>
                    <div className=' text-base font-medium'>{`₹ ${prop.price}`}</div>
                </div>
            </div>

            <div className='my-5 ml-1 cursor-pointer'><img width={30} height={30} src="/svgs/delete.svg" alt="img" /></div>

        </div>
    );
}

export default cartcard;
