import React from 'react';
 
export default function Card(props:any){
    return(<div>
<div><div className=' w-52 h-72 bg-gray-200'> <div className={`${props.bgcolor} rounded-full text-xs  text-white w-1/6  `}>{props.v} </div> <div className=' w-full  '>{props.i}</div><div className='bg-gray-100 space-y-4'><div className='   text-xl font-sans tracking-widest text-left text-black  '>{props.l1}</div><div className='   tracking-widest  font-sans  text-left text-gray-500  '>{props.l2}</div><div className='flex gap-8'><div className='   text-black text-xs  font-sans  text-left   '>{props.l3}</div><div className='    text-gray-500  text-xs font-sans  text-left   '><s>{props.l4}</s></div></div> </div></div>
    </div></div>
    )
}
