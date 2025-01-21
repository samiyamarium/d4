import React from 'react';
import Image from 'next/image';
import  s from './s.png';
import s2 from './s2.png';
export default function Cart(){
    return(
        <div>
             
              
            <div  >
                <br/><div><ul className='bg-orange-500 rounded-md  px-52 p-2 flex bg-opacity-20 text-xl font-sans font-bold  gap-4 justify-around text-center  text-black'><li>Product</li><li>Price</li><li>Quantity</li><li>Sub-Total</li> </ul></div>
                <br/><div className='flex'><div className='  bg-orange-600 rounded-md bg-opacity-20 ml-20'><Image className='w-28 h-28  rounded-md flex-1 p-4' src={s} alt=''/></div><br/><div><ul className=' flex rounded-md text-xl font-sans font-bold  gap-44 pt-12 text-center  px-16 text-gray-500'><li><p >Sunny-Chic</p></li><li >Rs.25,000.000</li><li className='flex-1 w-8 h-8 outline outline-2 rounded-md outline-gray-400'>1</li><li className='ml-16'>Rs.25,000.000</li> </ul></div> <div className=' pt-[60]'><Image className="w-8 h-8" src={s2} alt=''/></div></div>
                  <br/>   <div className='  flex-1  w-96 h-96 bg-orange-500 rounded-md  ml-96  bg-opacity-20 '><p className='text-center pt-12 '><b className='  font-sans text-2xl tracking-wide '>Cart Totals</b></p><br/><br/><div className='mx-8 gap-20 flex'><p className='font-sans text-xl font-semibold'>Sub-Total</p><p className='text-gray-500 text-xl font-sans font-semibold tracking-wide'>Rs.25,000.000</p></div>
                  <br/><br/><div className='mx-8 gap-24 flex'><p className='font-sans text-xl font-semibold'>Total</p><p className='text-[#B88E2F] text-2xl font-sans font-semibold tracking-wide'>Rs.25,000.000</p></div><br/><br/><div className=' text-center '><button className='outline rounded-md outline-2 outline-black w-36 h-16 text-center '>Check Out</button></div></div>
</div>
            
            <div></div><br/><br/>
        </div>
    )
}
