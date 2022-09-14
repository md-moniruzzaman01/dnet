import React from 'react';
import footerImage from "../../../image/footerbg.png"
import footerImag1 from "../../../image/iso.png"
import footerImag2 from "../../../image/bacco.png"
import footerImag3 from "../../../image/basis.png"

import socialIcon1 from "../../../image/Facebook-Icon.png"
import socialIcon2 from "../../../image/twiter-Icon.png"
import socialIcon3 from "../../../image/youtubeIcon.png"
const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundImage: `url(${footerImage})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover',opacity:'98%' }} className="md:h-[32rem] h-auto mt-20">
                <div className=' pb-4 text-white  mx-auto max-w-5xl  pt-16 static md:flex px-4'>
                    <div className='w-full md:w-[500px]'>
                        <h2 className='text-4xl font-semibold'>STAY IN TOUCH</h2>
                        <div className='my-11'>
                        <img src={footerImag1} alt="" className='h-20 w-auto'/>
                        </div>
                        <div className='flex space-x-5'>
                        <img src={footerImag3} alt="" className='h-11 w-auto'/>
                        <img src={footerImag2} alt="" className='h-11 w-auto'/>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Contact Us</h2>
                        <address className='py-7 border-b '>
                        <p>info@dnet.org.bd</p>
                        <p>+880 9606003638</p>
                        <p>4/8 Humayun Road, Block-B,</p>
                        <p>Mohammadpur,</p>
                        <p>Dhaka 1207, Bangladesh</p>
                        </address>
                        <div className='flex  mt-7'>
                            <p>Financials</p>
                            <ul className='list-disc flex ml-4'>
                                <li className='mx-4'>Reports</li>
                                <li className='mx-4'>Donate</li>
                            </ul>
                           
                        </div>
                        <div className='flex space-x-5 my-4'>
                            <img src={socialIcon1} alt="" className='h-8 w-auto' />
                            <img src={socialIcon2} alt="" className='h-8 w-auto' />
                            <img src={socialIcon3} alt="" className='h-8 w-auto' />
                        </div>
                        <p>© 2022 All Rights Reserved by Dnet</p>

                    </div>
                </div>
            </footer>
            <div className='h-16 bg-gray-800'></div>
        </div>
    );
};

export default Footer;