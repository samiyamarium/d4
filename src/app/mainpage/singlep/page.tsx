import React from 'react';
import Image from 'next/image';
import sofa from './sofa.png';


import Card from '../card/page';
import h1 from '../card/h1.png';
import h2 from '../card/h2.png';
import h3 from '../card/h3.png';
import h4 from '../card/h4.png';


export default function Singlep(){
    return(
        <div>
             <div className='pt-20 '>
          <div  className=" mx-20 w-screen  h-60  text-white bg-[url('/shop.png')] pt-20 bg-cover text-center font-sans text-6xl"><b className=' text-amber-950 opacity-40'>Single Product</b><div ></div></div>
                  <br/></div>
                  <div className='bg-orange-500 bg-opacity-20 text-xl gap-8 w-screen  text-gray-500 outline flex px-8 py-4 pr-12 mx-32 '>Home  &#9205;  Shop   &#9205;   &#8739; <p className='text-black text-xl font-sans'>Sleek</p></div> <br/>
                  <div className=''>
                    <div className='mx-32 gap-8 flex'>
                        <div className='space-y-8 pt-8'><Image className="w-20 h-20   bg-orange-500 bg-opacity-10 rounded-md rotate-45" src={sofa} alt=''/><Image className="w-20 h-20 rotate-90 bg-orange-500 bg-opacity-10 rounded-md" src={sofa} alt=''/><Image className="w-20 h-20 rotate-180 bg-orange-500 bg-opacity-10 rounded-md" src={sofa} alt=''/><Image className="w-20 h-20 rotate-12 bg-orange-500 bg-opacity-10 rounded-md" src={sofa} alt=''/></div>
                        <div className='w-screen h-[490] rounded-md  flex-1 bg-orange-500 bg-opacity-20 '><Image className='w-screen h-[520] pt-32 ' src={sofa} alt=''/></div>
                        <div><b className='text-black font-sans text-2xl tracking-wide'>Sleek</b><br/><br/><p className='text-gray-500 text-xs font-sans'>Rs. 250,000.00</p><br/><p className='font-sans text-xs text-black'>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;&nbsp;&nbsp;   &#8739; &nbsp;&nbsp;    5 Customer Review</p><br/><p className='font-sans text-xs tracking-wide text-black'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ex molestiae recusandae, quo atque dignissimos aspernatur assumenda temporibus eius sunt tempore ullam neque reiciendis labore illo itaque voluptas debitis in!</p>
                        <br/><p className='fonr-sans text-xs text-gray-500'>Size</p><br/><div className='flex gap-8'><div className='flex-1 w-8 h-8 bg-[#B88E2F] rounded-md text-black  font-sans text-center'>L</div><div className='flex-1 w-8 h-8 bg-orange-500 bg-opacity-20 rounded-md text-black  font-sans text-center'>XL</div><div className='flex-1 w-8 h-8 bg-orange-500 bg-opacity-20 rounded-md text-black  font-sans text-center'>XS</div></div><br/><p className='text-xs font-sans text-gray tracking-wide'>Color</p>
                        <br/><div className='flex gap-4 '><p className='fonr-sans text-xs text-gray-500 '><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><br/><div className='w-8 bg-violet-600 rounded-full'></div><div className='  w-8  bg-black rounded-full'></div><div className='  w-8  bg-[#B88E2F] rounded-full'></div></div>
                        <br/><div className='flex gap-4'><button className='rounded-md text-center text-xl outline outline-2 outline-gray-300 text-black w-40 h-16'>- 1 +</button><button className='rounded-md w-40 h-16 text-center text-xl outline outline-2 outline-gray-300 text-black'>Add to cart</button><button className='rounded-md w-40 h-16 text-center text-xl outline outline-2 outline-gray-300 text-black'>+ Compare</button></div><br/><hr/><br/>
                        <div className='test-xs font-sans text-gray-800 tracking-wide '><p className='test-xs font-sans text-gray-500 tracking-wide '>SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;SS001</p><br/><p className='test-xs font-sans text-gray-500 tracking-wide '>Category&nbsp;:&nbsp;Handbags</p><br/><p className='test-xs font-sans text-gray-500 tracking-wide '>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;Bags n Bags</p><br/></div>
                        </div></div><br/><hr/>
                        
                  </div><br/>
                  <div> 
                    <div className='text-2xl text-center mx-48 flex justify-around font-sans font-semibold text-black gap-16'><p>Description</p><p className='text-gray-500'>Additional Information</p><p className='text-gray-500'>Reviews&#x5B;5&#x5D;</p>  </div>
                  <br/>
                   <div className='mx-32 text-gray-500 font-sans tracking-wide'>
                  <br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque quibusdam minima mollitia unde. Architecto consequuntur similique, porro iure, laboriosam atque eius animi vero consectetur exercitationem voluptatibus aut. Eaque, minima. </div>
                  <br/>
                  <br/><br/><hr/></div>

     <br/><br/>
     <div className='text-center text-3xl text-black font-sans font-bold'>Related Products</div><br/><br/>
     <div className='flex mx-28 gap-8 flex-wrap'>
     <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-30%' i={<Image className="w-screen h-48" src={h1} alt=""/>} l1='Furniro-w' l2='Boss' l3='Rp 2.500.000 ' l4='Rp 3.500.000'/></div>
         <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap " ><Card bgcolor='bg-red-700' v='-30%' i={<Image className="w-screen h-48" src={h2} alt=""/>} l1='Furniro-L' l2='Stylish ' l3='Rp 2.500.000 ' l4='Rp 3.500.000'/></div>
         <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image  className="w-screen h-48" src={h3} alt=""/>} l1='Furniro-M' l2='Luxury' l3='Rp 7.000.000 ' l4='Rp 14.000.000'/></div>
         <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className="w-screen h-48" src={h4} alt=""/>} l1='Furniro-fun' l2='Party-for-u ' l3='Rp 5.00.000 ' l4='&nbsp;'/></div>
         </div><br/><br/>
     </div>
        
    )
}
