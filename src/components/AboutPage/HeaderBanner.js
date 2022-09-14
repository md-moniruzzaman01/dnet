import React from 'react';
import aboutusbanner from "../../image/about us/About-Us-1.jpg"
const HeaderBanner = () => {
    return (
        <div className=' flex justify-center items-center'>
            <div>
            <img src={aboutusbanner} alt="" className='h-auto md:h-[50vh] lg:h-[60vh] w-full max-w-[105rem] mx-auto'/>
          </div>
        </div>
    );
};

export default HeaderBanner;