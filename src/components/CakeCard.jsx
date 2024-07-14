import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CakeCard = (prop) => {

const [isFav, setisFav] = useState(false)

    return (
        <div className='p-2 flex flex-col justify-center items-center w-[250px] h-[300px] rounded-md bg-yellow-50 font-sans'>

            <img onClick={()=>{setisFav(!isFav)}} className='cursor-pointer ml-[150px] my-1' width={20} height={20} src={isFav?"/svgs/heart.svg":"/svgs/favourite2.svg"} alt="img" />
            <div>< img width={160} height={160} src={prop.cake} alt="img" /></div>
            <div className=' font-medium'>{prop.name}</div>
            <div>{prop.price}</div>
            <NavLink key={prop.keys} to={'/cart'} state={ prop.state }>  <div className=' cursor-pointer'><img width={150} height={50} src="/svgs/order.svg" alt="img" /></div>   </NavLink>

        </div>
    );
}

export default CakeCard;
