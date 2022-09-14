import React from 'react';
import { Link } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import socialIcon1 from "../../../image/topfbr.png"
import socialIcon2 from "../../../image/topinsta.png"
import socialIcon3 from "../../../image/toplinkd.png"
const Navtop = () => {
    return (
        <div className='bg-primary'>
            <div className='max-w-7xl mx-auto h-[40px] text-white  flex justify-end items-center'>
            <div className='mx-2'>
            <Link to="/">Career</Link>
            </div>
            <div className='h-full px-4 bg-secondary flex items-center mx-1'>
            <BsTelephone/>
           <p className='ml-2'>+8809 6060 03638</p>
           
            </div> 
            <div className='space-x-5 bg-secondary flex items-center h-full px-4'>
                <img src={socialIcon1} alt="" className='h-7 w-auto'/>
                <img src={socialIcon2} alt="" className='h-7 w-auto'/>
                <img src={socialIcon3} alt="" className='h-7 w-auto'/>
            </div>
            </div>
        </div>
    );
};

export default Navtop;