import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "../app/sanity/client";
import Image from "next/image";


import Contact from '../app/mainpage/Contact/page';
import Cart from '../app/mainpage/cart/page';

import Shop from '../app/mainpage/shop/page';
import lo from '../app/mainpage/card/lo.png';


import Card from '../app/mainpage/card/page';
import h1 from '../app/mainpage/card/h1.png';
import h2 from '../app/mainpage/card/h2.png';
import h3 from '../app/mainpage/card/h3.png';
import h4 from '../app/mainpage/card/h4.png';
import h5 from '../app/mainpage/card/h5.png';
import h6 from '../app/mainpage/card/h6.png';
import h7 from '../app/mainpage/card/h7.png';
import h8 from '../app/mainpage/card/h8.png';




import Singlep from '../app/mainpage/singlep/page';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...23]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div>
      <div><div className="flex justify-between m-8  bg-white ">
        <div className="flex "><br/><Image className="w-20" src={lo} alt="logo" /><div className="pt-4 font-sans font-bold tracking-wide text-3xl text-pink-400">Furniro-The Furniture Marketplace</div>  </div>
        <div ><ul className="flex justify-between gap-20 tracking-wider font-sans font-semibold text-pink-300 text-2xl pt-6">
          <li><a href="#1">Home</a> </li>
        <li><a href="#2">Shop</a></li>
        
        <li><a href="#3">Contact</a></li></ul></div>
        </div>
        <br/></div>
        <div id="1" className="m-20 text-center text-4xl text-black tracking-wide font-bold font-sans"><b>Our Products</b></div>
        <div className="flex flex-wrap   gap-12 mx-44">
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-30%' i={<Image className="w-screen h-48" src={h1} alt=""/>} l1='stylish' l2='Stylish ' l3='Rp 2.500.000 ' l4='Rp 3.500.000'/></div>
         <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap " ><Card bgcolor='bg-red-700' v='-30%' i={<Image className="w-screen h-48" src={h2} alt=""/>} l1='classic' l2='Classic' l3='Rp 2.500.000 ' l4='Rp 3.500.000'/></div>
       
         <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image className="w-screen h-48" src={h3} alt=""/>} l1='Luxury' l2='Luxury ' l3='Rp 7.000.000 ' l4='Rp 14.000.000'/></div>
         <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className="w-screen h-48" src={h4} alt=""/>} l1='Breathe' l2='Breathe' l3='Rp 5.00.000 ' l4='&nbsp;'/></div>
         </div>
        <br/><br/>
        <div className="flex flex-wrap pt-8 gap-12 mx-44">
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='&nbsp;' v='&nbsp;' i={<Image className="w-screen h-48" src={h5} alt=""/>} l1='Classy' l2='Classy' l3='Rp 1.500.000 ' l4='&nbsp;'/></div>
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className="w-screen h-48" src={h6} alt=""/>} l1='All-You-Desire' l2='Small desires' l3='Rp 1.50.000 ' l4='&nbsp;'/></div>
         <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image className="w-screen h-48" src={h7} alt=""/>} l1='Show' l2='Cute ' l3='Rp 7.000.000 ' l4='&nbsp;'/></div>
         <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap "><Card bgcolor='bg-emerald-500' v='NEW' i={<Image className="w-screen h-48" src={h8} alt=""/>} l1='Signature' l2='Signature Style' l3='Rp 500.000 ' l4='&nbsp;'/></div></div>
        <br/><br/> <div className="flex mx-60  flex-wrap"><button className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap outline outline-2 outline-[#B88E2F] text-[#B88E2F] mx-96 px-16 py-2 text-center ">Show More</button></div>
         <br/>

        
        
    
     <div ><Shop/></div>
         <br/>
          <div><Singlep/></div>
          <br/>
    <main id="2" className="">
      <h1 className="py-12 text-4xl font-bold outline outline-4 outline-gray-500 text-center text-purple-600 ">INVENTORY</h1>
     <br/><br/> <ul className="flex outline outline-8 outline-amber-800 flex-col gap-y-12 text-center">
        {posts.map((post) => (
          <li className="hover:underline " key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl p-8 font-semibold outline outline-8 outline-pink-950 text-pink-500 space-y-8">{post.title}</h2>
              <div className="p-4 outline outline-2 outline-amber-800 font-bold text-xs text-green-600">{new Date(post.publishedAt).toLocaleDateString()}</div><br/><hr/>
            </Link>
          </li>
        ))}
      </ul>
    </main>
          <div><Cart/></div>
        
         
          <div id="Contact"><Contact/></div>
          <br/>
          
          <br/>  <br/>
        
          <hr/>    
            <div id="4" className="flex m-20  bg-white gap-24 justify-between">
             <div className="space-y-16"> <div className="font-sans font-bold text-2xl tracking-wider ">Furniro-The Furniture Marketplace</div><div className="text-xl font-sans text-gray-400 tracking-wide ">400 University Drive Suite Lord <br/>Gabes,<br/>FL 33134 USA</div> </div>
           <div className="pt-2"> <div className=" text-gray-400 tracking-wider font-sans font-semibold text-2xl">Links</div><ul className="text-black py-8 space-y-12 tracking-wider font-sans font-semibold text-xl">
              <li >Home</li>
          <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
              </ul></div>
              <div className="pt-2"> <div className=" text-gray-400 tracking-wider font-sans font-semibold text-2xl">Help</div><ul className="text-black py-8 space-y-12 tracking-wider font-sans font-semibold text-xl">
              <li >Payment Options</li>
          <li>Returns</li>
              <li>Privacy Policies</li>
              </ul></div>
              <div className="pt-2"> <div className=" text-gray-400 tracking-wider font-sans font-semibold text-2xl">Newsletter</div><div className="flex"><div className="text-gray-400 py-8 space-y-12 tracking-wider font-sans font-semibold text-xl underline">Enter Your Email Address</div><div className="text-black pt-8 pl-4 tracking-wider font-sans font-semibold text-xl underline">SUBSCRIBE</div></div></div>   
            </div>
            <div className="m-20 font-sans font-semibold tracking-wider text-black text-left">2024 Furniro All rights reserved</div>
    </div>
  );
}